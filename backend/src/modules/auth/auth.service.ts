import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto, SignupDto, VerifyEmailDto } from './dto/auth.dto';
import { PrismaClient, user, USER_OTP_TYPE } from 'generated/prisma';
import { WebhookService } from '../webhook/webhook.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import {
  generateOtp,
  generateRandomString,
  generateRefferalId,
} from 'src/utils/random';
import { Mail, MailTemplate } from 'src/utils/mail';

@Injectable()
export class AuthService {
  private prisma = new PrismaClient();
  private readonly saltRounds = 10;
  private readonly secretKey = process.env.JWT_ACCESS_TOKEN_SECRET;

  private readonly mailService = new Mail();

  constructor(private webhookService: WebhookService) {}

  private async generateAuthTokens(
    id: string,
  ): Promise<{ __access: string; __refresh: string }> {
    const expirationTime = new Date();
    expirationTime.setDate(expirationTime.getHours() + 1);

    const accessToken = jwt.sign({ id: `${id}` }, this.secretKey, {
      expiresIn: '30d',
    });

    const refreshToken = generateRandomString(60);

    const refreshTokenjsonwebtoken = jwt.sign(
      { token: refreshToken },
      this.secretKey,
      { expiresIn: '80d' },
    );

    return { __access: accessToken, __refresh: refreshTokenjsonwebtoken };
  }

  private getClientIp(req?: any): string {
    if (!req) return 'unknown';

    // Check for various headers that might contain the real IP
    const forwarded = req.headers['x-forwarded-for'];
    if (forwarded) {
      // X-Forwarded-For can contain multiple IPs (client, proxy1, proxy2)
      // The client IP is the first one in the list
      const ips = forwarded.split(',').map((ip: string) => ip.trim());
      return ips[0] || 'unknown';
    }

    // Try other common headers
    const realIp =
      req.headers['x-real-ip'] ||
      req.headers['cf-connecting-ip'] || // Cloudflare
      req.headers['true-client-ip']; // Akamai and others

    if (realIp) return realIp;

    // Fall back to the direct connection IP
    // Express style
    if (req.connection && req.connection.remoteAddress) {
      return req.connection.remoteAddress;
    }

    // NestJS style
    if (req.ip) {
      return req.ip;
    }

    return 'unknown';
  }

  /**
   * Extract the user agent string from the request
   */
  private getUserAgent(req?: any): string {
    if (!req) return 'unknown';

    // Get the user agent from the request headers
    const userAgent = req.headers['user-agent'];

    return userAgent || 'unknown';
  }

  async signup(signupDto: SignupDto): Promise<any> {
    const oldUser = await this.prisma.user.findFirst({
      where: {
        email: signupDto.email,
      },
    });

    if (oldUser)
      throw new BadRequestException('account with email already exists');

    const hash = await bcrypt.hash(signupDto.password, this.saltRounds);

    const ref_code = generateRefferalId(6);

    const user = await this.prisma.user.create({
      data: {
        email: signupDto.email,
        name: signupDto.name,
        password: hash,
        type: signupDto.type,
        referral_code: ref_code,
      },
    });

    const tokens = await this.generateAuthTokens(user.id);

    await this.verifyEmailResend(user);

    const retUser = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        email_verified: true,
        profile_verified: true,
      },
    });

    return { message: 'success', user: retUser, tokens };
  }

  async login(loginDto: LoginDto, req?: Request): Promise<any> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: loginDto.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        email_verified: true,
        profile_verified: true,
        password: true,
      },
    });

    if (!user) throw new BadRequestException('invalid email or password');

    const isValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isValid) throw new BadRequestException('invalid email or password');
    // Get IP and user agent from request context if available
    const ip = this.getClientIp(); // Implement this method or pass from controller
    const userAgent = this.getUserAgent();

    const tokens = await this.generateAuthTokens(user.id);

    // Trigger webhook notification for login
    this.webhookService
      .notifyUserLogin(user.id, user.email, ip, userAgent)
      .catch((err) => {
        // Log webhook error but don't block login process
        console.error('Webhook notification failed:', err);
      });

    let { password, ...rest } = user;

    return { message: 'success', user: rest, tokens };
  }

  async logout(user: user): Promise<any> {
    return { message: 'success' };
  }

  async verifyEmailResend(user: user): Promise<any> {
    if (user.email_verified)
      throw new BadRequestException('Email already verified. Proceed to Login');

    await this.prisma.user_otp.deleteMany({
      where: {
        otp_type: USER_OTP_TYPE.VERIFY_EMAIL,
        user_id: user.id,
      },
    });

    const otp = generateOtp(6);

    const hash: string = await bcrypt.hash(otp, this.saltRounds);

    const currentDate = new Date();
    const expirationTime = new Date();
    expirationTime.setHours(expirationTime.getHours() + 1);

    const otpObject = await this.prisma.user_otp.create({
      data: {
        otp: hash,
        user_id: user.id,
        otp_type: USER_OTP_TYPE.VERIFY_EMAIL,
        expires_at: expirationTime,
        created_at: currentDate,
      },
    });

    //send email
    await this.mailService.sendTemplate<{ otp: string }>(
      MailTemplate.emailVerify,
      'Verify  your email address',
      { email: user.email },
      { otp },
    );

    return { message: 'success' };
  }

  async verifyEmail(user: user, verifyDto: VerifyEmailDto): Promise<any> {
    if (user.email_verified)
      throw new BadRequestException('Email already verified. Proceed to Login');

    const savedOtp = await this.prisma.user_otp.findFirst({
      where: {
        user_id: user.id,
        otp_type: USER_OTP_TYPE.VERIFY_EMAIL,
      },
    });

    if (!savedOtp)
      throw new BadRequestException(
        'The OTP you entered is not valid. Please check and try again.',
      );

    const currentTime = new Date();
    if (savedOtp.expires_at < currentTime)
      throw new BadRequestException(
        'Your OTP has expired. Please request a new one.',
      );

    const isValid = await bcrypt.compare(verifyDto.otp, savedOtp.otp);

    if (!isValid)
      throw new BadRequestException(
        'The OTP you entered is not valid. Please check and try again.',
      );

    await this.prisma.user.update({
      where: {
        id: savedOtp.user_id,
      },
      data: {
        email_verified: true,
      },
    });

    await this.prisma.user_otp.delete({
      where: {
        id: savedOtp.id,
        otp_type: USER_OTP_TYPE.VERIFY_EMAIL,
      },
    });

    return { message: 'success' };
  }

  async refreshToken(token: string): Promise<any> {}
}

import {
  Body,
  Controller,
  Post,
  Req,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto, VerifyEmailDto } from './dto/auth.dto';
import { AuthGuard } from 'src/middlewares/guard/auth.guard';
import { UnverifiedGuard } from 'src/middlewares/guard/unverified.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body(new ValidationPipe()) signupDto: SignupDto) {
    try {
      const res = await this.authService.signup(signupDto);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  @Post('login')
  async login(
    @Body(new ValidationPipe()) loginDto: LoginDto,
    @Req() req: Request,
  ) {
    try {
      const res = await this.authService.login(loginDto, req);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  @UseGuards(UnverifiedGuard)
  @Post('verify-email')
  async verifyEmail(
    @Request() req,
    @Body(new ValidationPipe()) verifyDto: VerifyEmailDto,
  ) {
    try {
      const user = req.user;
      const res = await this.authService.verifyEmail(user, verifyDto);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  @UseGuards(UnverifiedGuard)
  @Post('verify-email/resend')
  async verifyEmailResend(@Request() req) {
    try {
      const user = req.user;
      const res = await this.authService.verifyEmailResend(user);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    try {
      const user = req.user;
      const res = await this.authService.logout(user);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }

  @Post('refresh-token')
  async refreshToken(@Request() req) {
    try {
      const user = req.user;
      const { token } = req.body;
      const res = await this.authService.refreshToken(token);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }
}

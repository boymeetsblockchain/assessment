import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UnverifiedGuard implements CanActivate {
  private prisma = new PrismaClient();
  private secretKey = process.env.JWT_ACCESS_TOKEN_SECRET;
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      console.log('1');
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.secretKey,
      });
      // 💡 We're assigning the payload to the request object here
      console.log('2');
      if (!payload.id) throw new UnauthorizedException();
      const user = await this.prisma.user.findUnique({
        where: {
          id: payload.id,
        },
      });
      // so that we can access it in our route handlers
      console.log('3');
      if (!user) throw new UnauthorizedException();
      // if (appUser) throw new UnauthorizedException("account disabled, contact admin")
      request['user'] = user;
    } catch {
      console.log('5');
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  // private extractAccessTokenFromCookie(request: Request): string | undefined {
  //     const token = request.cookies['__access'];
  //     return token ? token : undefined;
  // }
}

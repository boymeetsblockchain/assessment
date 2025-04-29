import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { WebhookModule } from '../webhook/webhook.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports: [WebhookModule],
})
export class AuthModule {}

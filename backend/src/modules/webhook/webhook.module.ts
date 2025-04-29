import { Module } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { WebhookController } from './webhook.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService, JwtService],
  exports: [WebhookService],
})
export class WebhookModule {}

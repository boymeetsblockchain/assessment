import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProfileModule } from './modules/profile/profile.module';
import { AuthModule } from './modules/auth/auth.module';
import { WebhookModule } from './modules/webhook/webhook.module';
import { UploadModule } from './modules/upload/upload.module';
import { SettingsModule } from './modules/settings/settings.module';
@Module({
  imports: [
    ProfileModule,
    AuthModule,
    UploadModule,
    WebhookModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

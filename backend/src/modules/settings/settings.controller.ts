import { Controller, Get } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('users')
  async getUsers() {
    try {
      const users = await this.settingsService.getUsers();
      return {
        message: users.message,
        users: users,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

import { Injectable, Get } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class SettingsService {
  private prisma = new PrismaClient();

  @Get('users')
  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        photo_url: true,
        email_verified: true,
        profile_verified: true,
        type: true,
      },
    });
    return { message: 'success', users };
  }
}

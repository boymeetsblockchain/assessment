import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaClient, user } from 'generated/prisma';

@Injectable()
export class ProfileService {
  private prisma = new PrismaClient();

  async getUser(user: user): Promise<any> {
    const userDetails = await this.prisma.user.findFirst({
      where: {
        id: user.id,
      },
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

    return { message: 'success', user: userDetails };
  }
}

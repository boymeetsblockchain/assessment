import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UnverifiedGuard } from 'src/middlewares/guard/unverified.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  @UseGuards(UnverifiedGuard)
  @Get('user')
  async getUser(@Request() req) {
    try {
      const user = req.user;
      const res = await this.profileService.getUser(user);
      return res;
    } catch (error) {
      console.log({ error });
      throw error;
    }
  }
}

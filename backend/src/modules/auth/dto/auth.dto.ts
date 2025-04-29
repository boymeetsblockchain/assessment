import { USER_TYPE } from 'generated/prisma';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(USER_TYPE)
  type: USER_TYPE;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  referral_code: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class VerifyEmailDto {
  @IsNotEmpty()
  @IsString()
  otp: string;
}

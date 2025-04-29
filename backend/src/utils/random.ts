import { PrismaClient } from 'generated/prisma';
import * as jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
export function generateRandomString(length: number) {
  const characters =
    'ABCD,./?(@^*#&%@!_EFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateReadableString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateOtp(length: number) {
  const characters = '1234567890';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateRefferalId(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export function generateRandomJwtToken(
  length: number,
  expires_at: string,
): { token: string; tokenJWT: string } {
  const secretKey = process.env.JWT_ACCESS_TOKEN_SECRET;
  const token = generateRandomString(length);

  const tokenJWT = jwt.sign({ token: token }, secretKey, {
    expiresIn: expires_at,
  });

  return { token, tokenJWT };
}

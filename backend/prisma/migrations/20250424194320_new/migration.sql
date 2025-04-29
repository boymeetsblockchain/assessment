-- CreateEnum
CREATE TYPE "USER_TYPE" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "USER_OTP_TYPE" AS ENUM ('VERIFY_EMAIL');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "photo_url" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "type" "USER_TYPE" NOT NULL DEFAULT 'USER',
    "total_millage" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "total_coins" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "available_coins" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "profile_verified" BOOLEAN NOT NULL DEFAULT false,
    "referral_code" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_otp" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "otp" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "otp_type" "USER_OTP_TYPE" NOT NULL,

    CONSTRAINT "user_otp_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_otp" ADD CONSTRAINT "user_otp_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

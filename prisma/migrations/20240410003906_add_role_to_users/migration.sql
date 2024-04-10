-- CreateEnum
CREATE TYPE "eRole" AS ENUM ('ADMIN', 'USER', 'CLIENT');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "eRole" NOT NULL DEFAULT 'USER';

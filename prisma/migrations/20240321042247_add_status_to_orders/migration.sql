-- CreateEnum
CREATE TYPE "eStatus" AS ENUM ('READY', 'ON_PROCESS', 'COMPLETED', 'WAITING');

-- AlterTable
ALTER TABLE "Orders" ADD COLUMN     "status" "eStatus" NOT NULL DEFAULT 'WAITING';

-- CreateEnum
CREATE TYPE "eClient" AS ENUM ('FACTORY', 'DISTRIBUTOR');

-- AlterTable
ALTER TABLE "Companies" ADD COLUMN     "type" "eClient" NOT NULL DEFAULT 'FACTORY';

-- AlterTable
ALTER TABLE "Shippings" ADD COLUMN     "pricePerInch" INTEGER NOT NULL DEFAULT 330;

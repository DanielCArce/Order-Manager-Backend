/*
  Warnings:

  - You are about to alter the column `pricePerInch` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "pricePerInch" SET DATA TYPE INTEGER;

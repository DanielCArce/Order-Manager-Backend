/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "kindOf" SET DEFAULT 'CLIENT';

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

/*
  Warnings:

  - You are about to drop the column `estimated_shipping` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `received_date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - You are about to alter the column `password` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Provider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shipping` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[order_id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_items` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('CLIENT', 'PROVIDER', 'BOTH');

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_id_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_id_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderID_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_shippingID_fkey";

-- DropForeignKey
ALTER TABLE "Provider" DROP CONSTRAINT "Provider_id_fkey";

-- DropForeignKey
ALTER TABLE "Shipping" DROP CONSTRAINT "Shipping_id_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "estimated_shipping",
DROP COLUMN "received_date",
ADD COLUMN     "client_id" INTEGER NOT NULL,
ADD COLUMN     "date" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "order_id" TEXT NOT NULL,
ADD COLUMN     "order_items" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isActive",
ADD COLUMN     "username" VARCHAR(255) NOT NULL,
ALTER COLUMN "email" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255),
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "Provider";

-- DropTable
DROP TABLE "Shipping";

-- DropEnum
DROP TYPE "Roles";

-- DropEnum
DROP TYPE "TypeClients";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "kind_company" "CompanyType" NOT NULL DEFAULT 'CLIENT',
    "legal_name" TEXT NOT NULL,
    "comercial_name" TEXT NOT NULL,
    "legal_id" TEXT NOT NULL,
    "is_fe" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shipping_Orders" (
    "id" SERIAL NOT NULL,
    "order" TEXT NOT NULL,
    "shipping_items" JSONB NOT NULL,
    "date" TIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shipping_Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_legal_name_key" ON "Company"("legal_name");

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_id_key" ON "Order"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

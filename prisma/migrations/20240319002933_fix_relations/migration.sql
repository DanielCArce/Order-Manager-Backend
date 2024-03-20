/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shipping` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_id_fkey";

-- DropForeignKey
ALTER TABLE "Shipping" DROP CONSTRAINT "Shipping_id_fkey";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "Shipping";

-- DropEnum
DROP TYPE "clientType";

-- DropEnum
DROP TYPE "statusType";

-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isFE" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "orderID" TEXT NOT NULL,
    "clientID" INTEGER NOT NULL,
    "items" JSONB[],
    "pricePerInch" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shippings" (
    "id" SERIAL NOT NULL,
    "shippingID" TEXT NOT NULL,
    "orderID" TEXT NOT NULL,

    CONSTRAINT "Shippings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Companies_name_key" ON "Companies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Companies_email_key" ON "Companies"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_orderID_key" ON "Orders"("orderID");

-- CreateIndex
CREATE UNIQUE INDEX "Shippings_shippingID_key" ON "Shippings"("shippingID");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_clientID_fkey" FOREIGN KEY ("clientID") REFERENCES "Companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shippings" ADD CONSTRAINT "Shippings_orderID_fkey" FOREIGN KEY ("orderID") REFERENCES "Orders"("orderID") ON DELETE RESTRICT ON UPDATE CASCADE;

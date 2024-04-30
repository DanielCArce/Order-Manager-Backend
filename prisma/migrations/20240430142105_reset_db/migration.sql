-- CreateEnum
CREATE TYPE "eStatus" AS ENUM ('ON_PROCESS', 'COMPLETED');

-- CreateEnum
CREATE TYPE "eRole" AS ENUM ('ADMIN', 'USER', 'CLIENT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "eRole" NOT NULL DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isFE" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "orderID" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clientID" INTEGER NOT NULL,
    "items" JSONB[],
    "pricePerInch" INTEGER NOT NULL,
    "status" "eStatus" NOT NULL DEFAULT 'ON_PROCESS',

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shippings" (
    "id" SERIAL NOT NULL,
    "shippingID" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderID" TEXT NOT NULL,
    "items" JSONB[],

    CONSTRAINT "Shippings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

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

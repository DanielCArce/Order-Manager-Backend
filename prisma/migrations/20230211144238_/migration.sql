-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "isActive" SET DEFAULT true;

-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "received_date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Provider" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

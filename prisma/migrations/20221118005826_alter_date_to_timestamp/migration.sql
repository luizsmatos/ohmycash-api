-- AlterTable
ALTER TABLE "accounts" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "createdAt" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP;

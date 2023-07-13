/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Apartments` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Apartments" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "updatedAt";

-- CreateTable
CREATE TABLE "Houses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "bathroom" TEXT NOT NULL,
    "space" TEXT NOT NULL,
    "floors" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Houses_pkey" PRIMARY KEY ("id")
);

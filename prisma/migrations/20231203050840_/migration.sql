/*
  Warnings:

  - Added the required column `bgColor` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Color" AS ENUM ('yellow', 'green', 'red');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "bgColor" "Color" NOT NULL;

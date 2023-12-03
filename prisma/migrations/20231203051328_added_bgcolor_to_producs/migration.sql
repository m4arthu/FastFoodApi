/*
  Warnings:

  - You are about to drop the column `bgColor` on the `Order` table. All the data in the column will be lost.
  - Added the required column `bgColor` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "bgColor";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "bgColor" "Color" NOT NULL;

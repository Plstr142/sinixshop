/*
  Warnings:

  - You are about to drop the column `currency` on the `order` table. All the data in the column will be lost.
  - Added the required column `currentcy` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `stripePaymentId` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `amount` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `orderId` on table `productonorder` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `productoncart` DROP FOREIGN KEY `ProductOnCart_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productonorder` DROP FOREIGN KEY `ProductOnOrder_orderId_fkey`;

-- DropIndex
DROP INDEX `ProductOnCart_productId_fkey` ON `productoncart`;

-- DropIndex
DROP INDEX `ProductOnOrder_orderId_fkey` ON `productonorder`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `currency`,
    ADD COLUMN `currentcy` VARCHAR(191) NOT NULL,
    MODIFY `stripePaymentId` VARCHAR(191) NOT NULL,
    MODIFY `amount` INTEGER NOT NULL,
    MODIFY `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `productonorder` MODIFY `orderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `ProductOnOrder` ADD CONSTRAINT `ProductOnOrder_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductOnCart` ADD CONSTRAINT `ProductOnCart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

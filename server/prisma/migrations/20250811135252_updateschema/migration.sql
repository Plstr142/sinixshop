/*
  Warnings:

  - You are about to drop the column `currentcy` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `currentcy`,
    ADD COLUMN `currency` VARCHAR(191) NULL,
    MODIFY `stripePaymentId` VARCHAR(191) NULL,
    MODIFY `amount` INTEGER NULL,
    MODIFY `status` VARCHAR(191) NULL;

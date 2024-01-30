/*
  Warnings:

  - You are about to drop the `samples` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `samples`;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventTitle` VARCHAR(191) NOT NULL,
    `organizer` VARCHAR(191) NOT NULL,
    `eventType` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Event_organizer_key`(`organizer`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the `instance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `instance`;

-- CreateTable
CREATE TABLE `instancies` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `instancies` ADD CONSTRAINT `instancies_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

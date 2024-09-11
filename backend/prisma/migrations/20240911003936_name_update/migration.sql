/*
  Warnings:

  - You are about to drop the column `nome` on the `professor` table. All the data in the column will be lost.
  - Added the required column `name` to the `professor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_professor" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "professor";
DROP TABLE "professor";
ALTER TABLE "new_professor" RENAME TO "professor";
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

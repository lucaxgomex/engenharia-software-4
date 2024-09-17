/*
  Warnings:

  - You are about to drop the column `nome` on the `Disciplina` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `aluno` table. All the data in the column will be lost.
  - Added the required column `name` to the `Disciplina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `aluno` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disciplina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "professorId" INTEGER NOT NULL,
    CONSTRAINT "Disciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Disciplina" ("id", "professorId") SELECT "id", "professorId" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
CREATE UNIQUE INDEX "Disciplina_name_professorId_key" ON "Disciplina"("name", "professorId");
CREATE TABLE "new_aluno" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_aluno" ("createdAt", "email", "id", "updatedAt") SELECT "createdAt", "email", "id", "updatedAt" FROM "aluno";
DROP TABLE "aluno";
ALTER TABLE "new_aluno" RENAME TO "aluno";
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

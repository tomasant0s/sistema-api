/*
  Warnings:

  - Added the required column `funcionarioId` to the `treinamento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_treinamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "validade" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "funcionarioId" TEXT NOT NULL,
    CONSTRAINT "treinamento_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_treinamento" ("createdAt", "id", "nome", "updatedAt", "validade") SELECT "createdAt", "id", "nome", "updatedAt", "validade" FROM "treinamento";
DROP TABLE "treinamento";
ALTER TABLE "new_treinamento" RENAME TO "treinamento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

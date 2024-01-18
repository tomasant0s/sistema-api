/*
  Warnings:

  - You are about to drop the column `funcionarioId` on the `treinamento` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "TreinamentosFuncionario" (
    "funcionarioId" TEXT NOT NULL,
    "treinamentoId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("funcionarioId", "treinamentoId"),
    CONSTRAINT "TreinamentosFuncionario_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TreinamentosFuncionario_treinamentoId_fkey" FOREIGN KEY ("treinamentoId") REFERENCES "treinamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_treinamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "validade" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_treinamento" ("createdAt", "id", "nome", "updatedAt", "validade") SELECT "createdAt", "id", "nome", "updatedAt", "validade" FROM "treinamento";
DROP TABLE "treinamento";
ALTER TABLE "new_treinamento" RENAME TO "treinamento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

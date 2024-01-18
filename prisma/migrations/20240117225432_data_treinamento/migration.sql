/*
  Warnings:

  - You are about to alter the column `validade` on the `treinamento` table. The data in that column could be lost. The data in that column will be cast from `DateTime` to `Int`.
  - Added the required column `nr` to the `treinamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataTreinamento` to the `TreinamentosFuncionario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_treinamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nr" TEXT NOT NULL,
    "validade" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_treinamento" ("createdAt", "id", "nome", "updatedAt", "validade") SELECT "createdAt", "id", "nome", "updatedAt", "validade" FROM "treinamento";
DROP TABLE "treinamento";
ALTER TABLE "new_treinamento" RENAME TO "treinamento";
CREATE TABLE "new_TreinamentosFuncionario" (
    "funcionarioId" TEXT NOT NULL,
    "treinamentoId" TEXT NOT NULL,
    "dataTreinamento" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("funcionarioId", "treinamentoId"),
    CONSTRAINT "TreinamentosFuncionario_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TreinamentosFuncionario_treinamentoId_fkey" FOREIGN KEY ("treinamentoId") REFERENCES "treinamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TreinamentosFuncionario" ("createdAt", "funcionarioId", "treinamentoId") SELECT "createdAt", "funcionarioId", "treinamentoId" FROM "TreinamentosFuncionario";
DROP TABLE "TreinamentosFuncionario";
ALTER TABLE "new_TreinamentosFuncionario" RENAME TO "TreinamentosFuncionario";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the `funcTreinamento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "funcTreinamento";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TreinamentosFuncionario" (
    "funcionarioId" TEXT NOT NULL,
    "treinamentoId" TEXT NOT NULL,
    "dataTreinamento" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("funcionarioId", "treinamentoId"),
    CONSTRAINT "TreinamentosFuncionario_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TreinamentosFuncionario_treinamentoId_fkey" FOREIGN KEY ("treinamentoId") REFERENCES "treinamento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

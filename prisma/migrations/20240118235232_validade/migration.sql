-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_treinamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "nr" TEXT NOT NULL,
    "validade" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_treinamento" ("createdAt", "id", "nome", "nr", "updatedAt", "validade") SELECT "createdAt", "id", "nome", "nr", "updatedAt", "validade" FROM "treinamento";
DROP TABLE "treinamento";
ALTER TABLE "new_treinamento" RENAME TO "treinamento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

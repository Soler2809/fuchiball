/*
  Warnings:

  - You are about to drop the `Match` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_awayTeamId_fkey";

-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_homeTeamId_fkey";

-- DropTable
DROP TABLE "Match";

-- DropTable
DROP TABLE "Team";

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seleccion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "codigoFifa" TEXT NOT NULL,
    "bandera" TEXT NOT NULL,
    "entrenador" TEXT NOT NULL,
    "rankingFifa" INTEGER NOT NULL,
    "grupoId" INTEGER NOT NULL,
    "partidosJugados" INTEGER NOT NULL DEFAULT 0,
    "victorias" INTEGER NOT NULL DEFAULT 0,
    "empates" INTEGER NOT NULL DEFAULT 0,
    "derrotas" INTEGER NOT NULL DEFAULT 0,
    "golesFavor" INTEGER NOT NULL DEFAULT 0,
    "golesContra" INTEGER NOT NULL DEFAULT 0,
    "diferenciaGoles" INTEGER NOT NULL DEFAULT 0,
    "puntos" INTEGER NOT NULL DEFAULT 0,
    "posesionPromedio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tirosPromedio" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "precisionPases" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "expectedGoals" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Seleccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jugador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "posicion" TEXT NOT NULL,
    "club" TEXT NOT NULL,
    "dorsal" INTEGER NOT NULL,
    "goles" INTEGER NOT NULL DEFAULT 0,
    "asistencias" INTEGER NOT NULL DEFAULT 0,
    "minutosJugados" INTEGER NOT NULL DEFAULT 0,
    "precisionPases" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "tiros" INTEGER NOT NULL DEFAULT 0,
    "seleccionId" INTEGER NOT NULL,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" SERIAL NOT NULL,
    "equipoLocalId" INTEGER NOT NULL,
    "equipoVisitanteId" INTEGER NOT NULL,
    "golesLocal" INTEGER NOT NULL,
    "golesVisitante" INTEGER NOT NULL,
    "posesionLocal" DOUBLE PRECISION NOT NULL,
    "posesionVisitante" DOUBLE PRECISION NOT NULL,
    "tirosLocal" INTEGER NOT NULL,
    "tirosVisitante" INTEGER NOT NULL,
    "expectedGoalsLocal" DOUBLE PRECISION NOT NULL,
    "expectedGoalsVisitante" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "estadio" TEXT NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventoPartido" (
    "id" SERIAL NOT NULL,
    "minuto" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "jugador" TEXT NOT NULL,
    "seleccion" TEXT NOT NULL,
    "partidoId" INTEGER NOT NULL,

    CONSTRAINT "EventoPartido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Enfrentamiento" (
    "id" SERIAL NOT NULL,
    "seleccionAId" INTEGER NOT NULL,
    "seleccionBId" INTEGER NOT NULL,
    "partidosJugados" INTEGER NOT NULL DEFAULT 0,
    "victoriasSeleccionA" INTEGER NOT NULL DEFAULT 0,
    "victoriasSeleccionB" INTEGER NOT NULL DEFAULT 0,
    "empates" INTEGER NOT NULL DEFAULT 0,
    "golesSeleccionA" INTEGER NOT NULL DEFAULT 0,
    "golesSeleccionB" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Enfrentamiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prediccion" (
    "id" SERIAL NOT NULL,
    "seleccionFavoritaId" INTEGER NOT NULL,
    "probabilidadVictoria" DOUBLE PRECISION NOT NULL,
    "probabilidadEmpate" DOUBLE PRECISION NOT NULL,
    "probabilidadDerrota" DOUBLE PRECISION NOT NULL,
    "expectedGoals" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Prediccion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_nombre_key" ON "Grupo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Seleccion_nombre_key" ON "Seleccion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Seleccion_codigoFifa_key" ON "Seleccion"("codigoFifa");

-- AddForeignKey
ALTER TABLE "Seleccion" ADD CONSTRAINT "Seleccion_grupoId_fkey" FOREIGN KEY ("grupoId") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jugador" ADD CONSTRAINT "Jugador_seleccionId_fkey" FOREIGN KEY ("seleccionId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_equipoLocalId_fkey" FOREIGN KEY ("equipoLocalId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partido" ADD CONSTRAINT "Partido_equipoVisitanteId_fkey" FOREIGN KEY ("equipoVisitanteId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventoPartido" ADD CONSTRAINT "EventoPartido_partidoId_fkey" FOREIGN KEY ("partidoId") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enfrentamiento" ADD CONSTRAINT "Enfrentamiento_seleccionAId_fkey" FOREIGN KEY ("seleccionAId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Enfrentamiento" ADD CONSTRAINT "Enfrentamiento_seleccionBId_fkey" FOREIGN KEY ("seleccionBId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prediccion" ADD CONSTRAINT "Prediccion_seleccionFavoritaId_fkey" FOREIGN KEY ("seleccionFavoritaId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

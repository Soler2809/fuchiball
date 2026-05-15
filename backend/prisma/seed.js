const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {

  const grupoA = await prisma.grupo.create({
    data: {
      nombre: "Grupo A",
    },
  });

  const grupoB = await prisma.grupo.create({
    data: {
      nombre: "Grupo B",
    },
  });

  await prisma.seleccion.createMany({
    data: [
      {
        nombre: "Argentina",
        codigoFifa: "ARG",
        bandera: "https://flagcdn.com/ar.svg",
        entrenador: "Lionel Scaloni",
        rankingFifa: 1,
        grupoId: grupoA.id,
        partidosJugados: 3,
        victorias: 2,
        empates: 1,
        derrotas: 0,
        golesFavor: 7,
        golesContra: 2,
        diferenciaGoles: 5,
        puntos: 7,
        posesionPromedio: 61.4,
        tirosPromedio: 14.2,
        precisionPases: 89.3,
        expectedGoals: 2.4,
      },

      {
        nombre: "Brasil",
        codigoFifa: "BRA",
        bandera: "https://flagcdn.com/br.svg",
        entrenador: "Dorival Júnior",
        rankingFifa: 3,
        grupoId: grupoA.id,
        partidosJugados: 3,
        victorias: 2,
        empates: 0,
        derrotas: 1,
        golesFavor: 8,
        golesContra: 3,
        diferenciaGoles: 5,
        puntos: 6,
        posesionPromedio: 63.1,
        tirosPromedio: 15.7,
        precisionPases: 90.1,
        expectedGoals: 2.8,
      },

      {
        nombre: "Francia",
        codigoFifa: "FRA",
        bandera: "https://flagcdn.com/fr.svg",
        entrenador: "Didier Deschamps",
        rankingFifa: 2,
        grupoId: grupoB.id,
        partidosJugados: 3,
        victorias: 2,
        empates: 1,
        derrotas: 0,
        golesFavor: 6,
        golesContra: 1,
        diferenciaGoles: 5,
        puntos: 7,
        posesionPromedio: 58.2,
        tirosPromedio: 13.4,
        precisionPases: 87.2,
        expectedGoals: 2.1,
      },

      {
        nombre: "España",
        codigoFifa: "ESP",
        bandera: "https://flagcdn.com/es.svg",
        entrenador: "Luis de la Fuente",
        rankingFifa: 8,
        grupoId: grupoB.id,
        partidosJugados: 3,
        victorias: 1,
        empates: 1,
        derrotas: 1,
        golesFavor: 5,
        golesContra: 4,
        diferenciaGoles: 1,
        puntos: 4,
        posesionPromedio: 69.5,
        tirosPromedio: 11.2,
        precisionPases: 92.4,
        expectedGoals: 1.9,
      },
    ],
  });

  console.log("Datos insertados correctamente");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
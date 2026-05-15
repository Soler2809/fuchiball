const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const selecciones = await prisma.seleccion.findMany({
      include: {
        grupo: true,
        jugadores: true,
      },
      orderBy: {
        puntos: "desc",
      },
    });

    res.json(selecciones);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error obteniendo selecciones",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const seleccion = await prisma.seleccion.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        grupo: true,
        jugadores: true,
        partidosLocal: true,
        partidosVisitante: true,
      },
    });

    res.json(seleccion);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Error obteniendo selección",
    });
  }
});

module.exports = router;
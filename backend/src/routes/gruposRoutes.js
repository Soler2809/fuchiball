const express = require("express");
const prisma = require("../lib/prisma");

const router = express.Router();

router.get("/", async (req, res) => {

  try {

    const grupos = await prisma.grupo.findMany({
      include: {
        selecciones: {
          orderBy: {
            puntos: "desc",
          },
        },
      },
    });

    res.json(grupos);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Error obteniendo grupos",
    });

  }

});

module.exports = router;
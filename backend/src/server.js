require("dotenv").config();
const express = require("express");
const cors = require("cors");

const seleccionesRoutes = require("./routes/seleccionesRoutes");
const gruposRoutes = require("./routes/gruposRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/selecciones", seleccionesRoutes);
app.use("/api/grupos", gruposRoutes);

app.get("/", (req, res) => {
  res.json({
    mensaje: "API de Fuchiball funcionando",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
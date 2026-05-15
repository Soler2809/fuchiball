import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import Clasificacion from "./pages/Clasificacion";
import Predicciones from "./pages/Predicciones";
import Selecciones from "./pages/Selecciones";
import Enfrentamientos from "./pages/Enfrentamientos";
import SeleccionDetalle from "./pages/SeleccionDetalle";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Clasificacion />}
        />

        <Route
          path="/predicciones"
          element={<Predicciones />}
        />

        <Route
          path="/selecciones"
          element={<Selecciones />}
        />

        <Route
          path="/enfrentamientos"
          element={<Enfrentamientos />}
        />

        <Route
          path="/seleccion/:id"
          element={<SeleccionDetalle />}
        />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>

);
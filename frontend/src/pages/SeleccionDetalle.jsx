import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const colores = [
  "#6EC1E4",
  "#2E7D32",
  "#FFD600",
  "#D32F2F",
  "#9C27B0",
  "#1976D2",
];

function generarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function SeleccionDetalle() {

  const { id } = useParams();

  const nombre = decodeURIComponent(id);

  const color =
    colores[nombre.length % colores.length];

  const radarData = [
    {
      atributo: "Ataque",
      valor: generarNumero(65, 95),
    },
    {
      atributo: "Defensa",
      valor: generarNumero(65, 95),
    },
    {
      atributo: "Posesión",
      valor: generarNumero(65, 95),
    },
    {
      atributo: "Precisión",
      valor: generarNumero(65, 95),
    },
    {
      atributo: "Velocidad",
      valor: generarNumero(65, 95),
    },
    {
      atributo: "Presión",
      valor: generarNumero(65, 95),
    },
  ];

  const rendimientoData = [
    {
      nombre: "Goles",
      valor: generarNumero(65, 95),
      color,
    },
    {
      nombre: "Defensa",
      valor: generarNumero(65, 95),
      color: "#2E7D32",
    },
    {
      nombre: "Pases",
      valor: generarNumero(65, 95),
      color: "#9C27B0",
    },
    {
      nombre: "Posesión",
      valor: generarNumero(65, 95),
      color: "#FFD600",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <div className="flex items-center gap-5 mb-6">

          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold"
            style={{
              backgroundColor: `${color}20`,
              color,
            }}
          >

            {nombre.charAt(0).toUpperCase()}

          </div>

          <div>

            <h1 className="text-5xl font-bold capitalize">
              {nombre}
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              Ranking FIFA #{generarNumero(1, 50)}
            </p>

          </div>

        </div>

        <div className="grid grid-cols-4 gap-6 mb-10">

          <div className="bg-[#0D1B2A] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Probabilidad de clasificar
            </h3>

            <p
              className="text-5xl font-bold"
              style={{
                color,
              }}
            >

              {generarNumero(40, 95)}%

            </p>

          </div>

          <div className="bg-[#0D1B2A] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Probabilidad campeón
            </h3>

            <p className="text-5xl font-bold text-green-400">
              {generarNumero(2, 30)}%
            </p>

          </div>

          <div className="bg-[#0D1B2A] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Promedio xG
            </h3>

            <p className="text-5xl font-bold text-yellow-400">
              {(Math.random() * 2 + 1).toFixed(1)}
            </p>

          </div>

          <div className="bg-[#0D1B2A] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Rendimiento general
            </h3>

            <p className="text-5xl font-bold text-red-400">
              {generarNumero(60, 95)}
            </p>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-8">

          <div className="bg-[#0D1B2A] rounded-3xl p-6 border border-[#1F3B5B]">

            <h2 className="text-2xl font-bold mb-2">
              Perfil táctico
            </h2>

            <p className="text-gray-400 mb-6">
              Rendimiento analítico de la selección
            </p>

            <div className="h-[400px]">

              <ResponsiveContainer width="100%" height="100%">

                <RadarChart data={radarData}>

                  <PolarGrid stroke="#1F3B5B" />

                  <PolarAngleAxis
                    dataKey="atributo"
                    stroke="#ddd"
                  />

                  <PolarRadiusAxis stroke="#666" />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#132238",
                      border: "1px solid #1F3B5B",
                      borderRadius: "14px",
                      color: "#fff",
                    }}
                    itemStyle={{
                      color: "#fff",
                    }}
                  />

                  <Radar
                    dataKey="valor"
                    stroke={color}
                    fill={color}
                    fillOpacity={0.6}
                  />

                </RadarChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="bg-[#0D1B2A] rounded-3xl p-6 border border-[#1F3B5B]">

            <h2 className="text-2xl font-bold mb-2">
              Rendimiento ofensivo
            </h2>

            <p className="text-gray-400 mb-6">
              Métricas comparativas de juego
            </p>

            <div className="h-[400px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={rendimientoData}>

                  <XAxis
                    dataKey="nombre"
                    stroke="#ccc"
                  />

                  <YAxis
                    stroke="#ccc"
                  />

                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#132238",
                      border: "1px solid #1F3B5B",
                      borderRadius: "14px",
                    }}
                    itemStyle={{
                      color: "#fff",
                    }}
                  />

                  <Bar
                    dataKey="valor"
                    radius={[12, 12, 0, 0]}
                  >

                    {rendimientoData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={entry.color}
                      />

                    ))}

                  </Bar>

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}
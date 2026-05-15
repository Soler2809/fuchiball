import MainLayout from "../layouts/MainLayout";

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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const colores = {
  argentina: "#6EC1E4",
  brasil: "#2E7D32",
  empate: "#FFD600",
};

const radarData = [
  {
    atributo: "Ataque",
    argentina: 92,
    brasil: 95,
  },
  {
    atributo: "Defensa",
    argentina: 84,
    brasil: 78,
  },
  {
    atributo: "Posesión",
    argentina: 89,
    brasil: 86,
  },
  {
    atributo: "Precisión",
    argentina: 91,
    brasil: 82,
  },
  {
    atributo: "Velocidad",
    argentina: 86,
    brasil: 94,
  },
  {
    atributo: "Presión",
    argentina: 83,
    brasil: 80,
  },
];

const comparacionData = [
  {
    nombre: "xG",
    argentina: 2.4,
    brasil: 2.1,
  },
  {
    nombre: "Posesión",
    argentina: 89,
    brasil: 84,
  },
  {
    nombre: "Pases",
    argentina: 91,
    brasil: 82,
  },
  {
    nombre: "Defensa",
    argentina: 84,
    brasil: 79,
  },
];

const prediccion = [
  {
    name: "Argentina",
    value: 46,
    color: colores.argentina,
  },
  {
    name: "Empate",
    value: 28,
    color: colores.empate,
  },
  {
    name: "Brasil",
    value: 26,
    color: colores.brasil,
  },
];

export default function Enfrentamientos() {

  return (

    <MainLayout>

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-3">
          Enfrentamientos
        </h1>

        <p className="text-gray-400 text-lg">
          Comparativa visual y análisis estadístico entre selecciones.
        </p>

      </div>

      <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-8 mb-10 shadow-2xl">

        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-5">

            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{
                backgroundColor: `${colores.argentina}20`,
                color: colores.argentina,
              }}
            >
              A
            </div>

            <div>

              <h2 className="text-4xl font-bold">
                Argentina
              </h2>

              <p className="text-gray-400">
                Ranking FIFA #1
              </p>

            </div>

          </div>

          <div className="text-5xl font-bold text-gray-500">
            VS
          </div>

          <div className="flex items-center gap-5">

            <div>

              <h2 className="text-4xl font-bold text-right">
                Brasil
              </h2>

              <p className="text-gray-400 text-right">
                Ranking FIFA #3
              </p>

            </div>

            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl font-bold"
              style={{
                backgroundColor: `${colores.brasil}20`,
                color: colores.brasil,
              }}
            >
              B
            </div>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-[#132238] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Victorias Argentina
            </h3>

            <p
              className="text-5xl font-bold"
              style={{
                color: colores.argentina,
              }}
            >
              5
            </p>

          </div>

          <div className="bg-[#132238] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Empates
            </h3>

            <p
              className="text-5xl font-bold"
              style={{
                color: colores.empate,
              }}
            >
              2
            </p>

          </div>

          <div className="bg-[#132238] rounded-2xl p-6 border border-[#1F3B5B]">

            <h3 className="text-gray-400 mb-3">
              Victorias Brasil
            </h3>

            <p
              className="text-5xl font-bold"
              style={{
                color: colores.brasil,
              }}
            >
              3
            </p>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">

        <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold">
                Perfil táctico Argentina
              </h2>

              <p className="text-gray-400 mt-2">
                Análisis ofensivo y defensivo
              </p>

            </div>

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
              style={{
                backgroundColor: `${colores.argentina}20`,
                color: colores.argentina,
              }}
            >
              A
            </div>

          </div>

          <div className="h-[420px]">

            <ResponsiveContainer width="100%" height="100%">

              <RadarChart data={radarData}>

                <PolarGrid stroke="#1F3B5B" />

                <PolarAngleAxis
                  dataKey="atributo"
                  stroke="#ccc"
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
                  dataKey="argentina"
                  stroke={colores.argentina}
                  fill={colores.argentina}
                  fillOpacity={0.5}
                />

              </RadarChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl">

          <div className="flex items-center justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold">
                Perfil táctico Brasil
              </h2>

              <p className="text-gray-400 mt-2">
                Análisis ofensivo y defensivo
              </p>

            </div>

            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
              style={{
                backgroundColor: `${colores.brasil}20`,
                color: colores.brasil,
              }}
            >
              B
            </div>

          </div>

          <div className="h-[420px]">

            <ResponsiveContainer width="100%" height="100%">

              <RadarChart data={radarData}>

                <PolarGrid stroke="#1F3B5B" />

                <PolarAngleAxis
                  dataKey="atributo"
                  stroke="#ccc"
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
                  dataKey="brasil"
                  stroke={colores.brasil}
                  fill={colores.brasil}
                  fillOpacity={0.5}
                />

              </RadarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">

        <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl">

          <h2 className="text-2xl font-bold mb-2">
            Probabilidad del partido
          </h2>

          <p className="text-gray-400 mb-6">
            Predicción del resultado
          </p>

          <div className="h-[420px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={prediccion}
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  dataKey="value"
                  label={({ value }) => `${value}%`}
                >

                  {prediccion.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={entry.color}
                    />

                  ))}

                </Pie>

                <Tooltip
                  contentStyle={{
                    backgroundColor: "#132238",
                    border: "1px solid #1F3B5B",
                    borderRadius: "14px",
                    color: "#fff",
                  }}
                  labelStyle={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                  itemStyle={{
                    color: "#fff",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

        <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl flex items-center justify-center">

          <div className="text-center">

            <h2 className="text-3xl font-bold mb-6">
              Resultado esperado
            </h2>

            <p
              className="text-7xl font-bold mb-4"
              style={{
                color: colores.argentina,
              }}
            >
              2 - 1
            </p>

            <p className="text-gray-400 text-xl">
              Argentina favorito según simulación estadística
            </p>

          </div>

        </div>

      </div>

      <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl">

        <h2 className="text-2xl font-bold mb-2">
          Comparación estadística
        </h2>

        <p className="text-gray-400 mb-8">
          Métricas clave de rendimiento
        </p>

        <div className="h-[450px]">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={comparacionData}>

              <XAxis
                dataKey="nombre"
                stroke="#ccc"
              />

              <YAxis
                stroke="#ccc"
              />

              <Tooltip
                cursor={{
                  fill: "rgba(255,255,255,0.03)",
                }}
                contentStyle={{
                  backgroundColor: "#132238",
                  border: "1px solid #1F3B5B",
                  borderRadius: "14px",
                  color: "#fff",
                }}
                labelStyle={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
                itemStyle={{
                  color: "#fff",
                }}
              />

              <Bar
                dataKey="argentina"
                fill={colores.argentina}
                radius={[10, 10, 0, 0]}
              />

              <Bar
                dataKey="brasil"
                fill={colores.brasil}
                radius={[10, 10, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        <div className="flex justify-center gap-10 mt-6">

          <div className="flex items-center gap-3">

            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: colores.argentina,
              }}
            />

            <span className="text-gray-300 font-medium">
              Argentina
            </span>

          </div>

          <div className="flex items-center gap-3">

            <div
              className="w-4 h-4 rounded-full"
              style={{
                backgroundColor: colores.brasil,
              }}
            />

            <span className="text-gray-300 font-medium">
              Brasil
            </span>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}
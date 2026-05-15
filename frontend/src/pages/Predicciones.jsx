import MainLayout from "../layouts/MainLayout";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const grupos = [
  {
    grupo: "Grupo A",
    equipos: [
      { nombre: "México", probabilidad: 61, color: "#2E7D32" },
      { nombre: "Sudáfrica", probabilidad: 42, color: "#FFD600" },
      { nombre: "República de Corea", probabilidad: 55, color: "#1976D2" },
      { nombre: "Chequia", probabilidad: 47, color: "#D32F2F" },
    ],
  },

  {
    grupo: "Grupo B",
    equipos: [
      { nombre: "Canadá", probabilidad: 58, color: "#D32F2F" },
      { nombre: "Bosnia", probabilidad: 49, color: "#1976D2" },
      { nombre: "Catar", probabilidad: 41, color: "#FFD600" },
      { nombre: "Suiza", probabilidad: 64, color: "#D50000" },
    ],
  },

  {
    grupo: "Grupo C",
    equipos: [
      { nombre: "Brasil", probabilidad: 88, color: "#2E7D32" },
      { nombre: "Marruecos", probabilidad: 57, color: "#D32F2F" },
      { nombre: "Haití", probabilidad: 34, color: "#1976D2" },
      { nombre: "Escocia", probabilidad: 51, color: "#6EC1E4" },
    ],
  },

  {
    grupo: "Grupo D",
    equipos: [
      { nombre: "EE.UU.", probabilidad: 69, color: "#1976D2" },
      { nombre: "Paraguay", probabilidad: 52, color: "#D32F2F" },
      { nombre: "Australia", probabilidad: 46, color: "#FFD600" },
      { nombre: "Turquía", probabilidad: 49, color: "#D50000" },
    ],
  },

  {
    grupo: "Grupo E",
    equipos: [
      { nombre: "Alemania", probabilidad: 81, color: "#9E9E9E" },
      { nombre: "Curazao", probabilidad: 38, color: "#1976D2" },
      { nombre: "Costa de Marfil", probabilidad: 58, color: "#FFD600" },
      { nombre: "Ecuador", probabilidad: 63, color: "#FFD600" },
    ],
  },

  {
    grupo: "Grupo F",
    equipos: [
      { nombre: "Países Bajos", probabilidad: 78, color: "#FF6F00" },
      { nombre: "Japón", probabilidad: 61, color: "#1976D2" },
      { nombre: "Suecia", probabilidad: 52, color: "#FFD600" },
      { nombre: "Túnez", probabilidad: 44, color: "#D32F2F" },
    ],
  },

  {
    grupo: "Grupo G",
    equipos: [
      { nombre: "Bélgica", probabilidad: 73, color: "#D32F2F" },
      { nombre: "Egipto", probabilidad: 51, color: "#FFD600" },
      { nombre: "RI de Irán", probabilidad: 43, color: "#2E7D32" },
      { nombre: "Nueva Zelanda", probabilidad: 35, color: "#1976D2" },
    ],
  },

  {
    grupo: "Grupo H",
    equipos: [
      { nombre: "España", probabilidad: 82, color: "#D32F2F" },
      { nombre: "Cabo Verde", probabilidad: 39, color: "#2E7D32" },
      { nombre: "Arabia Saudí", probabilidad: 45, color: "#2E7D32" },
      { nombre: "Uruguay", probabilidad: 68, color: "#6EC1E4" },
    ],
  },

  {
    grupo: "Grupo I",
    equipos: [
      { nombre: "Francia", probabilidad: 86, color: "#1976D2" },
      { nombre: "Senegal", probabilidad: 57, color: "#2E7D32" },
      { nombre: "Irak", probabilidad: 33, color: "#D32F2F" },
      { nombre: "Noruega", probabilidad: 62, color: "#6EC1E4" },
    ],
  },

  {
    grupo: "Grupo J",
    equipos: [
      { nombre: "Argentina", probabilidad: 89, color: "#6EC1E4" },
      { nombre: "Argelia", probabilidad: 47, color: "#2E7D32" },
      { nombre: "Austria", probabilidad: 54, color: "#D32F2F" },
      { nombre: "Jordania", probabilidad: 29, color: "#FFD600" },
    ],
  },

  {
    grupo: "Grupo K",
    equipos: [
      { nombre: "Portugal", probabilidad: 79, color: "#D32F2F" },
      { nombre: "RD Congo", probabilidad: 36, color: "#2E7D32" },
      { nombre: "Uzbekistán", probabilidad: 42, color: "#1976D2" },
      { nombre: "Colombia", probabilidad: 72, color: "#FFD600" },
    ],
  },

  {
    grupo: "Grupo L",
    equipos: [
      { nombre: "Inglaterra", probabilidad: 83, color: "#FFFFFF" },
      { nombre: "Croacia", probabilidad: 61, color: "#D32F2F" },
      { nombre: "Ghana", probabilidad: 40, color: "#FFD600" },
      { nombre: "Panamá", probabilidad: 35, color: "#D32F2F" },
    ],
  },
];

export default function Predicciones() {

  return (

    <MainLayout>

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-3">
          Predicciones Mundial 2026
        </h1>

        <p className="text-gray-400 text-lg">
          Simulación estadística de clasificación por grupo.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-8">

        {grupos.map((grupo, index) => (

          <div
            key={index}
            className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl"
          >

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                {grupo.grupo}
              </h2>

              <span className="text-gray-400">
                Probabilidades
              </span>

            </div>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={grupo.equipos}>

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
                    dataKey="probabilidad"
                    radius={[10, 10, 0, 0]}
                  >

                    {grupo.equipos.map((entry, idx) => (

                      <Cell
                        key={idx}
                        fill={entry.color}
                      />

                    ))}

                  </Bar>

                </BarChart>

              </ResponsiveContainer>

            </div>

            <div className="mt-6 space-y-3">

              {grupo.equipos.map((equipo, idx) => (

                <div
                  key={idx}
                  className="flex items-center justify-between bg-[#132238] rounded-2xl px-4 py-3 border border-[#1F3B5B]"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: equipo.color,
                      }}
                    />

                    <span className="text-gray-300 font-medium">
                      {equipo.nombre}
                    </span>

                  </div>

                  <span
                    className="font-bold"
                    style={{
                      color: equipo.color,
                    }}
                  >

                    {equipo.probabilidad}%

                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </MainLayout>

  );

}
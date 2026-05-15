import { Link } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

const grupos = [
  {
    grupo: "Grupo A",
    equipos: [
      "México",
      "Sudáfrica",
      "República de Corea",
      "Chequia",
    ],
  },

  {
    grupo: "Grupo B",
    equipos: [
      "Canadá",
      "Bosnia y Herzegovina",
      "Catar",
      "Suiza",
    ],
  },

  {
    grupo: "Grupo C",
    equipos: [
      "Brasil",
      "Marruecos",
      "Haití",
      "Escocia",
    ],
  },

  {
    grupo: "Grupo D",
    equipos: [
      "EE. UU.",
      "Paraguay",
      "Australia",
      "Turquía",
    ],
  },

  {
    grupo: "Grupo E",
    equipos: [
      "Alemania",
      "Curazao",
      "Costa de Marfil",
      "Ecuador",
    ],
  },

  {
    grupo: "Grupo F",
    equipos: [
      "Países Bajos",
      "Japón",
      "Suecia",
      "Túnez",
    ],
  },

  {
    grupo: "Grupo G",
    equipos: [
      "Bélgica",
      "Egipto",
      "RI de Irán",
      "Nueva Zelanda",
    ],
  },

  {
    grupo: "Grupo H",
    equipos: [
      "España",
      "Islas de Cabo Verde",
      "Arabia Saudí",
      "Uruguay",
    ],
  },

  {
    grupo: "Grupo I",
    equipos: [
      "Francia",
      "Senegal",
      "Irak",
      "Noruega",
    ],
  },

  {
    grupo: "Grupo J",
    equipos: [
      "Argentina",
      "Argelia",
      "Austria",
      "Jordania",
    ],
  },

  {
    grupo: "Grupo K",
    equipos: [
      "Portugal",
      "RD Congo",
      "Uzbekistán",
      "Colombia",
    ],
  },

  {
    grupo: "Grupo L",
    equipos: [
      "Inglaterra",
      "Croacia",
      "Ghana",
      "Panamá",
    ],
  },
];

function colorEquipo(nombre) {

  const colores = {
    Argentina: "#6EC1E4",
    Brasil: "#2E7D32",
    Francia: "#1976D2",
    España: "#D32F2F",
    Colombia: "#FFD600",
    Portugal: "#C62828",
    Inglaterra: "#FFFFFF",
    Alemania: "#9E9E9E",
  };

  return colores[nombre] || "#6EC1E4";

}

export default function Selecciones() {

  return (

    <MainLayout>

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-3">
          Selecciones del Mundial
        </h1>

        <p className="text-gray-400 text-lg">
          Exploración visual de las selecciones participantes.
        </p>

      </div>

      <div className="space-y-14">

        {grupos.map((grupo, index) => (

          <div key={index}>

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-3xl font-bold">
                {grupo.grupo}
              </h2>

              <span className="text-gray-400">
                4 selecciones
              </span>

            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

              {grupo.equipos.map((equipo, idx) => {

                const color = colorEquipo(equipo);

                return (

                  <div
                    key={idx}
                    className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  >

                    <div
                      className="h-2"
                      style={{
                        backgroundColor: color,
                      }}
                    />

                    <div className="p-6">

                      <div className="flex items-center justify-between mb-6">

                        <div
                          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                          style={{
                            backgroundColor: `${color}20`,
                            color,
                          }}
                        >

                          {equipo.charAt(0)}

                        </div>

                        <div
                          className="px-3 py-1 rounded-full text-sm font-bold"
                          style={{
                            backgroundColor: `${color}20`,
                            color,
                          }}
                        >

                          FIFA

                        </div>

                      </div>

                      <h3 className="text-2xl font-bold mb-2">

                        {equipo}

                      </h3>

                      <p className="text-gray-400 mb-6">

                        {grupo.grupo}

                      </p>

                      <div className="mb-8">

                        <div className="flex justify-between mb-2">

                          <span className="text-gray-400">
                            Probabilidad
                          </span>

                          <span
                            className="font-bold"
                            style={{
                              color,
                            }}
                          >

                            {Math.floor(Math.random() * 40) + 50}%

                          </span>

                        </div>

                        <div className="w-full bg-[#132238] rounded-full h-3">

                          <div
                            className="h-3 rounded-full"
                            style={{
                              width: `${Math.floor(Math.random() * 40) + 50}%`,
                              backgroundColor: color,
                            }}
                          />

                        </div>

                      </div>

                      <Link
                        to={`/seleccion/${equipo.toLowerCase()}`}
                        className="block text-center py-4 rounded-2xl font-semibold transition-all duration-300"
                        style={{
                          backgroundColor: `${color}20`,
                          color,
                        }}
                      >

                        Ver análisis

                      </Link>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        ))}

      </div>

    </MainLayout>

  );

}
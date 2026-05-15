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

export default function Clasificacion() {

  return (

    <MainLayout>

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-3">
          Clasificación Mundial 2026
        </h1>

        <p className="text-gray-400 text-lg">
          Tabla oficial de grupos del Mundial.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-8">

        {grupos.map((grupo, index) => (

          <div
            key={index}
            className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl"
          >

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                {grupo.grupo}
              </h2>

              <span className="text-gray-400">
                FIFA
              </span>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b border-[#1F3B5B] text-gray-400">

                    <th className="text-left py-4">
                      Selección
                    </th>

                    <th>PJ</th>
                    <th>G</th>
                    <th>E</th>
                    <th>P</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>DG</th>
                    <th>PTS</th>

                  </tr>

                </thead>

                <tbody>

                  {grupo.equipos.map((equipo, idx) => (

                    <tr
                      key={idx}
                      className="border-b border-[#132238] hover:bg-[#132238] transition"
                    >

                      <td className="py-5 font-semibold text-lg">
                        {equipo}
                      </td>

                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center">0</td>
                      <td className="text-center font-bold">
                        0
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        ))}

      </div>

    </MainLayout>

  );

}
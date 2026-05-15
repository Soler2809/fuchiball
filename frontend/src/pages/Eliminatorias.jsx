import MainLayout from "../layouts/MainLayout";

const izquierda = [
  ["1E", "3ABCDF"],
  ["1I", "3CDFGH"],
  ["2A", "2B"],
  ["1F", "2C"],
  ["2K", "2L"],
  ["1H", "2J"],
  ["1D", "3BEFIJ"],
  ["1G", "3AEHIJ"],
];

const derecha = [
  ["1C", "2F"],
  ["2E", "2I"],
  ["1A", "3CEFHI"],
  ["1L", "3EHIJK"],
  ["1J", "2H"],
  ["2D", "2G"],
  ["1B", "3EFGIJ"],
  ["1K", "3DEIJL"],
];

function Partido({ top, bottom, codigo }) {

  return (

    <div className="mb-8 relative">

      <div className="text-xs text-gray-500 mb-2">
        {codigo}
      </div>

      <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-xl overflow-hidden shadow-lg w-[170px]">

        <div className="px-4 py-3 border-b border-[#1F3B5B] text-gray-200 font-medium bg-[#132238] hover:bg-[#1A2D46] transition">

          {top}

        </div>

        <div className="px-4 py-3 text-gray-200 font-medium bg-[#132238] hover:bg-[#1A2D46] transition">

          {bottom}

        </div>

      </div>

    </div>

  );

}

function Columna({ titulo, partidos, startCode }) {

  return (

    <div>

      <h2 className="text-xl font-bold mb-10 text-center text-white">
        {titulo}
      </h2>

      <div>

        {partidos.map((partido, index) => (

          <Partido
            key={index}
            top={partido[0]}
            bottom={partido[1]}
            codigo={`P${startCode + index}`}
          />

        ))}

      </div>

    </div>

  );

}

export default function Eliminatorias() {

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-bold mb-3">
          Eliminatorias Mundial 2026
        </h1>

        <p className="text-gray-400 text-lg">
          Llaves oficiales previas al inicio del torneo.
        </p>

      </div>

      <div className="overflow-x-auto pb-10">

       <div className="min-w-[1400px] mx-auto flex items-start justify-center gap-10">
         <div className="flex gap-8">

            <Columna
              titulo="Dieciseisavos"
              partidos={izquierda}
              startCode={73}
            />

            <Columna
              titulo="Octavos"
              partidos={[
                ["W74", "W77"],
                ["W73", "W75"],
                ["W83", "W84"],
                ["W81", "W82"],
              ]}
              startCode={89}
            />

            <Columna
              titulo="Cuartos"
              partidos={[
                ["W89", "W90"],
                ["W93", "W94"],
              ]}
              startCode={97}
            />

          </div>

        <div className="flex flex-col justify-center px-8">
            <div className="mb-20">

              <h2 className="text-2xl font-bold text-center mb-8 text-[#FFD600]">
                Semifinal
              </h2>

              <Partido
                top="W97"
                bottom="W98"
                codigo="P101"
              />

              <Partido
                top="W99"
                bottom="W100"
                codigo="P102"
              />

            </div>

            <div className="mb-20">

              <h2 className="text-3xl font-bold text-center mb-8 text-[#FFD600]">
                Final
              </h2>

              <Partido
                top="W101"
                bottom="W102"
                codigo="P104"
              />

            </div>

            <div>

              <h2 className="text-xl font-bold text-center mb-8 text-gray-400">
                Tercer puesto
              </h2>

              <Partido
                top="RU101"
                bottom="RU102"
                codigo="P103"
              />

            </div>

          </div>

         <div className="flex gap-8">

            <Columna
              titulo="Cuartos"
              partidos={[
                ["W91", "W92"],
                ["W95", "W96"],
              ]}
              startCode={99}
            />

            <Columna
              titulo="Octavos"
              partidos={[
                ["W76", "W78"],
                ["W79", "W80"],
                ["W86", "W88"],
                ["W85", "W87"],
              ]}
              startCode={91}
            />

            <Columna
              titulo="Dieciseisavos"
              partidos={derecha}
              startCode={76}
            />

          </div>

        </div>

      </div>

    </MainLayout>

  );

}
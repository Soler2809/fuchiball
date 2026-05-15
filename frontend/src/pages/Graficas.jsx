import MainLayout from "../layouts/MainLayout";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList,
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
} from "recharts";

const scatterData = [
  { x: 92, y: 84, nombre: "Argentina" },
  { x: 95, y: 78, nombre: "Brasil" },
  { x: 88, y: 82, nombre: "Francia" },
  { x: 85, y: 76, nombre: "España" },
  { x: 82, y: 79, nombre: "Alemania" },
  { x: 84, y: 80, nombre: "Inglaterra" },
];

const treeData = [
  { name: "Argentina", size: 18 },
  { name: "Brasil", size: 16 },
  { name: "Francia", size: 14 },
  { name: "España", size: 10 },
  { name: "Inglaterra", size: 9 },
  { name: "Portugal", size: 7 },
  { name: "Alemania", size: 6 },
];

const funnelData = [
  { value: 48, name: "48 Selecciones", fill: "#1976D2" },
  { value: 32, name: "32 Octavos", fill: "#0288D1" },
  { value: 16, name: "16 Cuartos", fill: "#43A047" },
  { value: 8, name: "8 Semifinales", fill: "#FDD835" },
  { value: 4, name: "4 Finalistas", fill: "#FB8C00" },
  { value: 1, name: "1 Campeón", fill: "#E53935" },
];

const radialData = [
  { name: "Argentina", uv: 89, fill: "#6EC1E4" },
  { name: "Brasil", uv: 86, fill: "#2E7D32" },
  { name: "Francia", uv: 82, fill: "#1976D2" },
  { name: "España", uv: 78, fill: "#D32F2F" },
];

const lineData = [
  { year: "2010", ranking: 7 },
  { year: "2012", ranking: 5 },
  { year: "2014", ranking: 3 },
  { year: "2016", ranking: 2 },
  { year: "2018", ranking: 3 },
  { year: "2020", ranking: 1 },
  { year: "2022", ranking: 1 },
  { year: "2024", ranking: 1 },
];

const heatmap = [
  ["Argentina", 92, 84, 89, 83, 90],
  ["Brasil", 95, 78, 86, 80, 88],
  ["Francia", 88, 82, 87, 85, 86],
  ["España", 85, 76, 90, 82, 84],
  ["Inglaterra", 84, 80, 85, 81, 83],
  ["Alemania", 82, 79, 84, 79, 82],
];

function colorHeatmap(valor) {

  if (valor >= 90) return "bg-green-600";
  if (valor >= 80) return "bg-lime-600";
  if (valor >= 70) return "bg-yellow-600";

  return "bg-red-600";

}

function Card({ title, subtitle, children }) {

  return (

    <div className="bg-[#0D1B2A] border border-[#1F3B5B] rounded-3xl p-6 shadow-2xl">

      <h2 className="text-2xl font-bold mb-2">
        {title}
      </h2>

      <p className="text-gray-400 mb-6">
        {subtitle}
      </p>

      {children}

    </div>

  );

}

export default function Graficas() {

  return (

    <MainLayout>

      <div className="mb-12">

        <h1 className="text-5xl font-bold mb-3">
          Gráficas avanzadas
        </h1>

        <p className="text-gray-400 text-lg">
          Visualización avanzada de estadísticas y análisis del Mundial.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">

        <Card
          title="Scatter Chart"
          subtitle="Ataque vs Defensa de selecciones"
        >

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <ScatterChart>

                <CartesianGrid stroke="#1F3B5B" />

                <XAxis
                  type="number"
                  dataKey="x"
                  name="Ataque"
                  stroke="#ccc"
                />

                <YAxis
                  type="number"
                  dataKey="y"
                  name="Defensa"
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

                <Scatter
                  data={scatterData}
                  fill="#6EC1E4"
                />

              </ScatterChart>

            </ResponsiveContainer>

          </div>

        </Card>

        <Card
          title="Treemap"
          subtitle="Favoritismo al título"
        >

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <Treemap
                data={treeData}
                dataKey="size"
                stroke="#07111F"
                fill="#1976D2"
              />

            </ResponsiveContainer>

          </div>

        </Card>

      </div>

      <div className="grid grid-cols-3 gap-8 mb-8">

        <Card
          title="Funnel Chart"
          subtitle="Camino al título"
        >

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <FunnelChart>

                <Tooltip />

                <Funnel
                  dataKey="value"
                  data={funnelData}
                  isAnimationActive
                >

                  <LabelList
                    position="right"
                    fill="#fff"
                    stroke="none"
                    dataKey="name"
                  />

                </Funnel>

              </FunnelChart>

            </ResponsiveContainer>

          </div>

        </Card>

        <Card
          title="Radial Bar Chart"
          subtitle="Probabilidad de clasificación"
        >

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <RadialBarChart
                innerRadius="20%"
                outerRadius="90%"
                data={radialData}
                startAngle={180}
                endAngle={0}
              >

                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="uv"
                />

                <Tooltip />

              </RadialBarChart>

            </ResponsiveContainer>

          </div>

        </Card>

        <Card
          title="Line Chart"
          subtitle="Evolución del ranking FIFA"
        >

          <div className="h-[350px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={lineData}>

                <CartesianGrid stroke="#1F3B5B" />

                <XAxis
                  dataKey="year"
                  stroke="#ccc"
                />

                <YAxis stroke="#ccc" />

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

                <Line
                  type="monotone"
                  dataKey="ranking"
                  stroke="#6EC1E4"
                  strokeWidth={3}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </Card>

      </div>

      <Card
        title="Heatmap"
        subtitle="Análisis de atributos por selección"
      >

        <div className="overflow-x-auto">

          <table className="w-full overflow-hidden rounded-2xl">

            <thead>

              <tr className="bg-[#132238] text-gray-300">

                <th className="p-4 text-left">
                  Selección
                </th>

                <th className="p-4">
                  Ataque
                </th>

                <th className="p-4">
                  Defensa
                </th>

                <th className="p-4">
                  Posesión
                </th>

                <th className="p-4">
                  Presión
                </th>

                <th className="p-4">
                  Efectividad
                </th>

              </tr>

            </thead>

            <tbody>

              {heatmap.map((fila, index) => (

                <tr
                  key={index}
                  className="border-b border-[#1F3B5B]"
                >

                  <td className="p-4 font-semibold">
                    {fila[0]}
                  </td>

                  {fila.slice(1).map((valor, idx) => (

                    <td
                      key={idx}
                      className={`p-4 text-center font-bold ${colorHeatmap(valor)}`}
                    >

                      {valor}

                    </td>

                  ))}

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </Card>

    </MainLayout>

  );

}
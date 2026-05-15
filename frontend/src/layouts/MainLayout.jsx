import { Link, useLocation } from "react-router-dom";

export default function MainLayout({ children }) {

  const location = useLocation();

  const links = [
    {
      nombre: "Clasificación",
      ruta: "/",
    },
    {
      nombre: "Selecciones",
      ruta: "/selecciones",
    },
    {
      nombre: "Enfrentamientos",
      ruta: "/enfrentamientos",
    },
    {
      nombre: "Predicciones",
      ruta: "/predicciones",
    },
  ];

  return (

    <div className="min-h-screen bg-[#07111F] text-white flex">

      <aside className="w-72 bg-[#0D1B2A] border-r border-[#1B263B] p-6 flex flex-col">

        <div className="mb-14">

          <h1 className="text-4xl font-bold tracking-wide">
            Fuchiball
          </h1>

          <p className="text-gray-400 mt-2">
            Plataforma analítica del Mundial 2026
          </p>

        </div>

        <nav className="flex flex-col gap-3">

          {links.map((link) => (

            <Link
              key={link.ruta}
              to={link.ruta}
              className={`px-5 py-4 rounded-2xl transition-all duration-300 font-medium ${
                location.pathname === link.ruta
                  ? "bg-[#132238] text-white border border-[#1F3B5B]"
                  : "text-gray-300 hover:bg-[#132238] hover:text-white"
              }`}
            >

              {link.nombre}

            </Link>

          ))}

        </nav>

        <div className="mt-auto">

          <div className="bg-[#132238] rounded-2xl p-5">

            <h3 className="text-lg font-semibold mb-2">
              Mundial 2026
            </h3>

            <p className="text-sm text-gray-400 leading-relaxed">
              Estadísticas, predicciones y análisis visual de selecciones,
              jugadores y enfrentamientos históricos.
            </p>

          </div>

        </div>

      </aside>

      <main className="flex-1 overflow-y-auto">

        <div className="p-8">

          {children}

        </div>

      </main>

    </div>

  );

}
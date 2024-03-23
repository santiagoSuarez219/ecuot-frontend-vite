import { HiMagnifyingGlass } from "react-icons/hi2";

const PanelAdministrador = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-center md:justify-center mt-4 md:text-center mb-6">
        <div className="grid gap-1.5">
          <h1 className="text-xl lg:text-2xl font-bold tracking-tighter">
            Panel de administrador
          </h1>
          <p className="text-sm text-gray-500">
            Elige la opcion que deseas modificar
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap lg:justify-center gap-2 lg:gap-6 text-gray-500 text-sm lg:text-base">
        <li className="text-black font-medium transition-colors cursor-pointer bg-gray-100 p-2 rounded-lg">
          Intervenciones
        </li>
        <li className="hover:text-black transition-colors cursor-pointer  p-2 rounded-lg">
          Noticias
        </li>
        <li className="hover:text-black transition-colors cursor-pointer p-2 rounded-lg">
          Conflictos
        </li>
        <li className="hover:text-black transition-colors cursor-pointer p-2 rounded-lg">
          Usuarios
        </li>
        <li className="hover:text-black transition-colors cursor-pointer p-2 rounded-lg">
          Equipo
        </li>
      </ul>
      <section className="rounded-lg border shadow-sm mt-4 lg:mt-6 pb-6">
        <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row border-b justify-between lg:items-center bg-gray-100 p-4 lg:p-6">
          <h2 className="lg:text-xl font-semibold tracking-tighter">
            Intervenciones
          </h2>
          <div className="flex items-center rounded-md border border-gray-300 bg-gray-100/40 pl-4">
            <HiMagnifyingGlass className="text-lg lg:text-xl text-gray-400" />
            <input
              type="search"
              className="flex py-2 text-sm focus:outline-none disabled:opacity-50 pl-4 bg-gray-100/40"
              placeholder="Buscar intervencion..."
            />
          </div>
        </div>
        <div className="w-full p-6">
          <table className="rounded-lg border w-full text-center">
            <thead className="border-b text-gray-500">
              <tr className="text-sm">
                <th className="py-2 px-2 lg:px-4 font-medium">Nombre</th>
                <th className="py-2 px-2 lg:px-4 font-medium">Descripcion</th>
                <th className="py-2 px-2 lg:px-4 font-medium">Fecha</th>
                <th className="py-2 px-2 lg:px-4 font-medium">Estado</th>
                <th className="py-2 px-2 lg:px-4 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b">
                <td className="py-2 px-2 lg:px-4">Intervencion 1</td>
                <td className="py-2 px-2 lg:px-4">
                  Descripcion de la intervencion 1
                </td>
                <td className="py-2 px-2 lg:px-4">01/01/2021</td>
                <td className="py-2 px-2 lg:px-4">Activo</td>
                <td className="py-2 px-2 lg:px-4">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-2 px-2 lg:px-4">Intervencion 2</td>
                <td className="py-2 px-2 lg:px-4">
                  Descripcion de la intervencion 2
                </td>
                <td className="py-2 px-2 lg:px-4">01/01/2021</td>
                <td className="py-2 px-2 lg:px-4">Activo</td>
                <td className="py-2 px-2 lg:px-4">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
                  <button className="text-red-500 hover:underline">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
export default PanelAdministrador;

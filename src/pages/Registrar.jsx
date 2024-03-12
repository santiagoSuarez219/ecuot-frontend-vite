const Registrar = () => {
  return (
    <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Registrar</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Ingresa los datos para crear una cuenta
          </p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 items-center mt-4 space-y-4 md:space-y-0 md:gap-4">
          <div>
            <label htmlFor="primer-nombre" className="font-medium">
              Nombre
            </label>
            <input
              id="primer-nombre"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="text"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="primer-apellido" className="font-medium">
              Apellido
            </label>
            <input
              id="primer-apellido"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="text"
              placeholder="Doe"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="rol" className="font-medium">
              Rol
            </label>
            <select
              id="rol"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
            >
              <option value="usuario">Usuario</option>
              <option value="investigador">Investigador</option>
              <option value="auxiliar">Auxiliar</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className="font-medium">
              Correo
            </label>
            <input
              id="email"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="email"
              placeholder="johndoe@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="password" className="font-medium">
              Contraseña
            </label>
            <input
              id="password"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="password"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="confirmar-password" className="font-medium">
              Confirmar contraseña
            </label>
            <input
              id="confirmar-password"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="password"
            />
          </div>
          <input
            type="submit"
            value={"Registrar"}
            className="w-full bg-black mb-5 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
          />
        </form>
      </div>
    </main>
  );
};
export default Registrar;

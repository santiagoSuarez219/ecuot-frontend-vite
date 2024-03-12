import { Link } from "react-router-dom";

const NuevoPassword = () => {
  return (
    <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Reestablece tu contraseña</h1>
          <p className={`text-gray-500`}>{"Ingresa tu nueva contraseña"}</p>
        </div>
        <form className="mt-4">
          <div>
            <label htmlFor="password" className="font-medium">
              Contraseña
            </label>
            <input
              id="password"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="password"
            />
          </div>
          <input
            type="submit"
            value={"Reestablecer contraseña"}
            className="w-full bg-black mt-4 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
          />
        </form>
        <p className="text-center mt-4 text-sm">
          Ya reestableciste tu contraseña?{" "}
          <span className="underline underline-offset-1">
            <Link to={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </main>
  );
};
export default NuevoPassword;

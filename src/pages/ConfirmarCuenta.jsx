import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const ConfirmarCuenta = () => {
  const { id } = useParams();

  const handleSumbmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BACKEND_URL}/usuarios/confirmar/${id}`
      );
      toast.success(data.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Confirmar cuenta</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Presiona el botón para confirmar tu cuenta
          </p>
        </div>
        <form onSubmit={handleSumbmit}>
          <input
            type="submit"
            value={"Confirmar cuenta"}
            className="w-full bg-black mt-4 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors md:col-span-2"
          />
        </form>
        <p className="text-center mt-4 text-sm">
          Ya confirmaste tu cuenta?{" "}
          <span className="underline underline-offset-1">
            <Link href={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </main>
  );
};
export default ConfirmarCuenta;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import clienteAxios from "../config/clienteAxios";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    try {
      const { data } = await clienteAxios.post(`/usuarios/login`, {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      setAuth(data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <>
      <main className="w-full flex flex-col justify-center items-center md:mt-0 p-4">
        <div className="space-y-2 text-center max-w-sm">
          <h1 className="text-3xl font-bold">Inicia sesión</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Introduzca su dirección de correo electrónico para acceder a su
            cuenta
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="my-4 w-full max-w-sm space-y-4"
        >
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full mt-2 p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="password">Password</label>
              <p className="underline underline-offset-1 text-sm cursor-pointer">
                <Link to={"olvide-password"}>Olvidaste tu contraseña</Link>
              </p>
            </div>
            <input
              id="password"
              className="w-full mt-2 p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value={"Iniciar Sesion"}
            className="w-full bg-black mb-5 py-3 text-white rounded cursor-pointer hover:bg-black/90 transition-colors"
          />
        </form>
      </main>
    </>
  );
};
export default Login;

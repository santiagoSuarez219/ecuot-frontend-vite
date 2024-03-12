import { useState } from "react";
import { toast } from "react-toastify";
import clienteAxios from "../config/clienteAxios";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [rol, setRol] = useState("usuario");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, email, password, repetirPassword, rol].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    if (password !== repetirPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    if (password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    try {
      const { data } = await clienteAxios.post("/usuarios", {
        nombre,
        apellido,
        email,
        password,
        rol,
      });
      toast.success(data.msg);
      setNombre("");
      setApellido("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
      setRol("usuario");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <main className="w-full h-[calc(100vh-96px)] overflow-y-auto justify-center items-center p-4">
      <div className="w-full max-w-md mx-auto">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Registrar</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Ingresa los datos para crear una cuenta
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 items-center mt-4 space-y-4 md:space-y-0 md:gap-4"
        >
          <div>
            <label htmlFor="primer-nombre" className="font-medium">
              Nombre
            </label>
            <input
              id="primer-nombre"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              type="text"
              placeholder="John"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="rol" className="font-medium">
              Rol
            </label>
            <select
              id="rol"
              className="w-full mt-2 p-3 border border-gray-400 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
              value={rol}
              onChange={(e) => setRol(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={repetirPassword}
              onChange={(e) => setRepetirPassword(e.target.value)}
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

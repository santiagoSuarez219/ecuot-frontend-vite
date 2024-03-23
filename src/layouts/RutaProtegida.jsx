import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "../components/Navbar";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if (cargando) return "Cargando...";
  return (
    <>
      {auth._id ? (
        <>
          <Navbar />
          <section className="px-4">
            <Outlet />
          </section>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
export default RutaProtegida;

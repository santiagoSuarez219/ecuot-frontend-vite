import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import useEcuot from "../hooks/useEcuot";
import useAuth from "../hooks/useAuth";

import Modal from "../modal";

export default function Navbar() {
  const { modalNavbar, handleCloseModal, handleOpenModal } = useEcuot();
  const { auth } = useAuth();

  return (
    <>
      <nav className="w-full flex p-4 lg:p-6 items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter lg:mr-8 max-w-xs md:max-w-none">
            <Link to={"/"}>ECUOT Repositorio Institucional</Link>
          </h1>
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li className="hover:underline underline-offset-4">
              <Link to={"/noticias"}>Noticias</Link>
            </li>
            <li className="hover:underline underline-offset-4">
              <Link to={"/conflictos"}>Conflictos</Link>
            </li>

            <li className="hover:underline underline-offset-4">
              <Link to={"/intervenciones"}>Intervenciones</Link>
            </li>
          </ul>
        </div>
        {auth?.nombre ? (
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <p className="text-gray-500">{auth.email}</p>
            <p className="text-gray-500 capitalize">{auth.rol.nombre}</p>
            <Link
              to={"/administrar"}
              className="hover:underline underline-offset-4 font-medium"
            >
              Panel de administrador
            </Link>
            <input
              type="button"
              value="Cerrar sesion"
              className="hover:underline underline-offset-4 font-medium"
            />
          </div>
        ) : (
          <button className="hidden lg:block p-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
            <Link to="/auth">Iniciar sesion</Link>
          </button>
        )}

        {modalNavbar ? (
          <HiOutlineXMark
            className="text-5xl z-10 lg:hidden"
            onClick={handleCloseModal}
          />
        ) : (
          <HiBars3
            className="text-5xl z-10 lg:hidden"
            onClick={handleOpenModal}
          />
        )}
        {modalNavbar && (
          <Modal>
            <div className="w-4/5 h-[calc(100vh-96px)] md:h-[calc(100vh-80px)] bg-white border-t border-l border-black absolute bottom-0 right-0 p-4">
              <ul className="flex flex-col gap-2 font-semibold">
                <li onClick={handleCloseModal}>
                  <Link to={"/noticias"}>Noticias</Link>
                </li>
                <li onClick={handleCloseModal}>
                  <Link to={"/conflictos"}>Conflictos</Link>
                </li>
                <li onClick={handleCloseModal}>
                  <Link to={"/intervenciones"}>Intervenciones</Link>
                </li>
                <div className="w-full h-[1px] rounded-sm bg-slate-200 mt-12"></div>
                {auth?.nombre ? (
                  <div className="flex flex-col gap-4 text-sm font-normal">
                    <p className="text-gray-500">{auth.email}</p>
                    <p className="text-gray-500 capitalize">
                      {auth.rol.nombre}
                    </p>
                    <input
                      type="button"
                      value="Cerrar sesion"
                      className="mt-4 font-medium border rounded-lg border-gray-400 p-2"
                    />
                  </div>
                ) : (
                  <button className="hidden lg:block p-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
                    <Link to="/auth">Iniciar sesion</Link>
                  </button>
                )}
              </ul>
            </div>
          </Modal>
        )}
      </nav>
    </>
  );
}

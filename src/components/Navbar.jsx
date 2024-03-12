import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import useEcuot from "../hooks/useEcuot";
import Modal from "../modal";

export default function Navbar() {
  const { modalNavbar, handleCloseModal, handleOpenModal } = useEcuot();
  return (
    <>
      <nav className="w-full flex p-4 lg:p-6 items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter lg:mr-8">
            <Link to={"/"}>ECUOT Repositorio Institucional</Link>
          </h1>
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li>
              <Link to={"/noticias"}>Noticias</Link>
            </li>
            <li>
              <Link to={"/conflictos"}>Conflictos</Link>
            </li>

            <li>
              <Link to={"/intervenciones"}>Intervenciones</Link>
            </li>
          </ul>
        </div>
        <button className="hidden lg:block p-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
          <Link to="/login">Iniciar sesion</Link>
        </button>
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
            <div className="w-4/5 h-[calc(100vh-96px)] bg-white border-t border-l border-black absolute bottom-0 right-0 p-4">
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
                <div className="w-full h-[1px] rounded-sm bg-slate-200"></div>
                <li>Iniciar sesion</li>
              </ul>
            </div>
          </Modal>
        )}
      </nav>
    </>
  );
}

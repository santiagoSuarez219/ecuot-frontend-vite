import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import useEcuot from "../hooks/useEcuot";

export default function Navbar() {
  const { modalNavbar, handleCloseModal, handleOpenModal } = useEcuot();
  return (
    <>
      <nav className="w-full flex p-4 lg:p-6 items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tighter lg:mr-8">
            <Link href={"/"}>ECUOT Repositorio Institucional</Link>
          </h1>
          <ul className="hidden lg:flex gap-6 text-sm font-medium">
            <li className="hover:border-b-2">
              <Link href={"/noticias"}>Noticias</Link>
            </li>
            <li className="hover:border-b-2">
              <Link href={"/conflictos"}>Conflictos</Link>
            </li>

            <li className="hover:border-b-2">
              <Link href={"/intervenciones"}>Intervenciones</Link>
            </li>
          </ul>
        </div>
        <button className="hidden lg:block p-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition-colors">
          <Link href="/login">Iniciar sesion</Link>
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
      </nav>
    </>
  );
}

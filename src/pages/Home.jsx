import SobreNosotros from "../components/SobreNosotros";
import EquipoTrabajo from "../components/EquipoTrabajo";
import SeccionIntervenciones from "../components/SeccionIntervenciones";
import SeccionNoticias from "../components/SeccionNoticias";
import SeccionConflictos from "../components/SeccionConflictos";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <main>
      <div className="p-2 w-full text-center space-y-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Introduccion
        </h1>
        <p className="text-justify md:text-center mx-auto max-w-[800px] text-gray-500 text-xl">
          ECOUT surge como resultado del proyecto de investigación “Conflictos
          urbanos asociados a las intervenciones y decisiones referidas al
          ordenamiento territorial de la ciudad de Medellín- Colombia” realizado
          por el Grupo de Investigación en Estudios sobre Desarrollo Local y
          Gestión Territorial de la Facultad de Ciencias Sociales y Educación de
          la IUCMA
        </p>
      </div>
      <figure className="hidden md:block w-full rounded-t-lg mb-6">
        <img
          src="/img/2.png"
          alt="Imagen de fondo"
          className="main-image rounded-t-lg "
        />
      </figure>
      <SobreNosotros />
      <EquipoTrabajo />
      <SeccionIntervenciones />
      <SeccionNoticias />
      <SeccionConflictos />
      <Footer />
    </main>
  );
};
export default Home;

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
      <section className="p-2 w-full text-center space-y-2 mb-6">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Sobre nosotros
        </h1>
        <p className="text-justify md:text-center mx-auto max-w-screen-lg text-gray-500 text-xl">
          La investigación planteada en 2018 se trazó como objetivo Caracterizar
          a través del análisis de prensa las tensiones en relación con las
          decisiones del ordenamiento territorial en la ciudad de Medellin entre
          1916- 2016. Lográndose como resultado un sistema de información que
          recupera y estructura la conflictividad asociada a los procesos de
          ordenamiento territorial en relación con tres componentes: Uno,
          Infonoticias, codifica la información identificada en prensa sobre las
          tensiones urbanas puestas en el escenario público. Dos,
          conflictividad. Caracteriza la conflictividad asociada a las
          intervenciones físico espaciales y decisiones del ordenamiento
          territorial. Tres, Intervenciones y decisiones, presenta las
          características de las intervenciones y decisiones objeto de tensión
          en el escenario público. El aplicativo ECUOT es desarrollado mediante
          convenio con el grupo de investigación en Automática, Electrónica y
          Ciencias Computacionales del ITM y tiene como propósito compartir los
          hallazgos del estudio con la comunidad académica, constituyéndose en
          una herramienta de consulta para orientarse en el reconocimiento de la
          transversalidad de las tensiones inherentes a las decisiones e
          intervenciones de ordenamiento territorial para la ciudad de Medellín.
        </p>
      </section>
      <section className="p-4 w-full text-center space-y-6 mb-6 bg-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Equipo de trabajo
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
          <div className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4">
            <h3 className="text-lg font-semibold w-1/2 mx-auto">
              Claudia Maria Gonzales Hernandez
            </h3>
            <p className="text-sm text-gray-500 w-1/2 mx-auto">
              Trabajadora Social.MG Ciencia Política.
            </p>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4">
            <h3 className="text-lg font-semibold w-1/2 mx-auto">
              Claudia Maria Gonzales Hernandez
            </h3>
            <p className="text-sm text-gray-500 w-1/2 mx-auto">
              Trabajadora Social.MG Ciencia Política.
            </p>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4">
            <h3 className="text-lg font-semibold w-1/2 mx-auto">
              Claudia Maria Gonzales Hernandez
            </h3>
            <p className="text-sm text-gray-500 w-1/2 mx-auto">
              Trabajadora Social.MG Ciencia Política.
            </p>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4">
            <h3 className="text-lg font-semibold w-1/2 mx-auto">
              Claudia Maria Gonzales Hernandez
            </h3>
            <p className="text-sm text-gray-500 w-1/2 mx-auto">
              Trabajadora Social.MG Ciencia Política.
            </p>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4">
            <h3 className="text-lg font-semibold w-1/2 mx-auto">
              Claudia Maria Gonzales Hernandez
            </h3>
            <p className="text-sm text-gray-500 w-1/2 mx-auto">
              Trabajadora Social.MG Ciencia Política.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Home;

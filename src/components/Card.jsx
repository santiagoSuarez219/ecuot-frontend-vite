const Card = () => {
  return (
    <div className="rounded-lg border shadow-sm max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 gap-2 lg:gap-0 md:grid-cols-2 p-4 border-b lg:hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Nombre de la intervencion
        </h3>
        <p>Ampliación Carrera 76</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 p-4 border-b lg:hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Descripcion
        </h3>
        <p className="text-justify">
          La obra consiste en la ampliación de la carrera 76, para que quedara
          de doble vía a una doble calzada de dos carriles a cada lado. Además
          la construcción de puentes sobre la quebrada la picacha, altavista,
          puente en altura sobre la calle 14 y el intercambio vial de la 80 con
          la carrera 76 y obras adicionales en la loma de los Bernal y el
          rincón. Incluye asimismo, remodelación de andenes y zonas verdes
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 p-4 border-b lg:hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Proyecto estrategico
        </h3>
        <p className="text-justify">
          Plan especial del Centro Tradicional y Representativo
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 p-4 border-b lg:hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Sistema Interno
        </h3>
        <p className="text-justify">Sistema Movilidad</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0 p-4 border-b lg:hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Fecha de inicio
        </h3>
        <p className="text-justify">04 Abril 2014</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b hover:bg-gray-100">
        <h3 className="text-base font-semibold whitespace-nowrap leading-none tracking-tight">
          Jerarquia
        </h3>
        <p className="text-justify">Ciudad</p>
      </div>
    </div>
  );
};
export default Card;

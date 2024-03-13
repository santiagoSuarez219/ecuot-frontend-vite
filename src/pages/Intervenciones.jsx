import Search from "../components/Search";
import FilterByDate from "../components/FilterByDate";
import Card from "../components/Card";

const Intervenciones = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-4 mx-auto text-center">
        <div className="grid gap-1.5">
          <h1 className="text-2xl font-bold tracking-tighter">
            Intervenciones Urbanisticas
          </h1>
          <p className="text-sm text-gray-500">
            Listado de todas las intervenciones urbanisticas
          </p>
        </div>
      </div>
      <form className="w-full flex flex-col lg:flex-row gap-6 lg:mt-6 mt-4 max-w-screen-xl mx-auto">
        <Search />
        <div className="flex flex-col md:flex-row md:gap-4 max-w-screen-md">
          <FilterByDate />
          <FilterByDate />
        </div>
      </form>
      <div className="w-full grid-cols-1 mt-4 lg:mt-6 space-y-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default Intervenciones;

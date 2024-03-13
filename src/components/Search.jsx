const Search = () => {
  return (
    <div className="flex items-center flex-col gap-2 lg:flex-row px-4 pb-4 lg:p-6  max-w-screen-md rounded-lg border shadow-sm">
      <div className="w-full lg:w-auto flex flex-col gap-1.5 mt-4 lg:mt-0">
        <h2 className="text-xl font-semibold whitespace-nowrap leading-none tracking-tight">
          Buscar
        </h2>
        <p className="text-sm text-gray-500">
          Filtrar por un nombre o una descripcion
        </p>
      </div>
      <div className="w-full">
        <input
          className="flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Buscar por nombre o descripcion..."
          type="search"
        />
      </div>
    </div>
  );
};
export default Search;

import CardIntervenciones from "./CardIntervenciones";

const SeccionConflictos = () => {
  return (
    <section className="p-2 w-full text-center space-y-2 mb-6 max-w-screen-xl mx-auto mt-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Conflictos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <CardIntervenciones />
        <CardIntervenciones />
        <CardIntervenciones />
      </div>
    </section>
  );
};
export default SeccionConflictos;

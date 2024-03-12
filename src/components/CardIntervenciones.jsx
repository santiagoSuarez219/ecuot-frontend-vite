import { HiArrowRight } from "react-icons/hi2";

const CardIntervenciones = () => {
  return (
    <article className="w-full bg-white rounded-lg shadow-md space-y-2 pt-8 pb-4 px-6 flex flex-col gap-6 relative">
      <h2 className="text-lg font-semibold">Nombre de la intervencion</h2>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        autem similique nesciunt repellat sint eaque blanditiis ab eos
        voluptatum libero. Reprehenderit recusandae laboriosam doloremque ex
        quidem omnis ut exercitationem corrupti. Exercitationem, architecto
        animi eligendi rem culpa sequi, ab porro facilis esse, asperiores
        incidunt officiis expedita nesciunt ducimus quos fuga inventore?
        Quibusdam vel sunt magnam illo quisquam a non excepturi ut.
      </p>
      <p className="text-sm text-gray-500 mt-6">April 15, 2022</p>
      <div className="bg-black absolute bottom-0 right-0 p-2 rounded-xl rounded-tr-none rounded-bl-none">
        <HiArrowRight className="text-2xl text-white" />
      </div>
    </article>
  );
};
export default CardIntervenciones;

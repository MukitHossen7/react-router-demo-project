import { useLoaderData } from "react-router-dom";
import Pet from "../Pet/Pet";

const Pets = () => {
  const pets = useLoaderData();
  const petsData = pets.pets;

  return (
    <div className="w-11/12 mx-auto pt-10">
      <h3 className="text-2xl font-bold text-center">
        Pets : {petsData.length}{" "}
      </h3>
      <div className="grid grid-cols-4 gap-4 pt-10">
        {petsData.map((petData) => (
          <Pet key={petData.petId} petData={petData}></Pet>
        ))}
      </div>
    </div>
  );
};

export default Pets;

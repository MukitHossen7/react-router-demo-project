import { useLoaderData } from "react-router-dom";
import Actor from "../Actor/Actor";

const Actors = () => {
  const actors = useLoaderData();
  const actorsData = actors.posts;
  console.log(actorsData);
  console.log(actors);
  return (
    <div className="w-11/12 mx-auto pt-10">
      <h2 className="text-2xl font-bold text-center">
        Actors : {actorsData.length}
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {actorsData.map((actorData) => (
          <Actor key={actorData.id} actorData={actorData}></Actor>
        ))}
      </div>
    </div>
  );
};

export default Actors;

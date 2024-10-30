import { useLoaderData, useNavigate } from "react-router-dom";

const ActorsDetails = () => {
  const actorData = useLoaderData();
  const navigate = useNavigate();
  const handleBackActors = () => {
    navigate("/actors");
  };
  const { image, title, description, author, category } = actorData;
  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="flex flex-col items-center justify-center text-center">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-60 w-92 object-cover rounded-xl"
          />
        </figure>
        <div className="space-y-1 mt-3">
          <h3 className="font-bold text-2xl">Name : {author.name}</h3>
          <p className="font-medium">Category : {category}</p>
          <p className="font-medium">Title : {title}</p>
          <p className="font-medium text-slate-400">{description}</p>
        </div>
        <button
          onClick={handleBackActors}
          className="btn btn-primary mt-4 font-bold"
        >
          Go Back Actors
        </button>
      </div>
    </div>
  );
};

export default ActorsDetails;

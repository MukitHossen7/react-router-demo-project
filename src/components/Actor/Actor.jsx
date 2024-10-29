import PropTypes from "prop-types";
const Actor = ({ actorData }) => {
  const { author, image, category } = actorData;
  return (
    <div>
      <div className="border border-slate-200 p-4 rounded-xl ">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-80 w-full object-cover rounded-xl mb-4"
          />
        </figure>
        <h3 className="font-bold text-2xl">{author.name}</h3>
        <p className="font-medium">{category}</p>
        <button className="btn btn-primary mt-5 font-bold">
          Actors Details
        </button>
      </div>
    </div>
  );
};

Actor.propTypes = {
  actorData: PropTypes.object,
};
export default Actor;

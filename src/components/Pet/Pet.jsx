import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Pet = ({ petData }) => {
  const { petId, pet_name, breed, image, price } = petData;

  const navigate = useNavigate();
  const handlePetsDetails = () => {
    navigate(`/petsDetails/${petId}`);
  };

  return (
    <div className="pt-10">
      <div className="card border border-slate-200 p-4 space-y-3">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-48 w-full object-cover rounded-xl"
          />
        </figure>
        <div className="">
          <h2 className="card-title">{pet_name}</h2>
          <p>Breed: {breed || "N/A"}</p>
          <p>Price : {price}</p>

          <button
            onClick={handlePetsDetails}
            className="btn btn-primary mt-4 font-bold"
          >
            Pets Details
          </button>
        </div>
      </div>
    </div>
  );
};
Pet.propTypes = {
  petData: PropTypes.object,
};
export default Pet;

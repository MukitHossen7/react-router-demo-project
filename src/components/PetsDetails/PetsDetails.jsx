import { useLoaderData, useNavigate } from "react-router-dom";

const PetsDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleBackPets = () => {
    navigate("/pets");
  };
  const {
    image,
    pet_name,
    category,
    date_of_birth,
    gender,
    pet_details,
    price,
  } = details.petData;

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="flex flex-col items-center justify-center text-center">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="h-48 w-92 object-cover rounded-xl"
          />
        </figure>
        <h3 className="font-bold text-2xl">Name : {pet_name}</h3>
        <p className="font-medium">Category : {category}</p>
        <p className="font-medium">Gender : {gender}</p>
        <p className="font-medium">Date of Birth : {date_of_birth}</p>
        <p className="font-medium">Price : {price} $</p>
        <p className="font-medium">{pet_details}</p>
        <button
          onClick={handleBackPets}
          className="btn btn-primary mt-4 font-bold"
        >
          Go Back Pets
        </button>
      </div>
    </div>
  );
};

export default PetsDetails;

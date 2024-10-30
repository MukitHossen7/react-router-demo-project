import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-5xl">Oops!!!</h1>
        <div>
          {error.status === 404 && (
            <div className="flex flex-col items-center">
              <p className="font-medium text-2xl mt-3">
                Sorry, an unexpected error has occurred .
              </p>
              <button
                onClick={handleBackHome}
                className="btn btn-primary mt-4 font-bold"
              >
                Go Back Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Error;

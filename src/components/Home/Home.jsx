import { Outlet, useNavigation } from "react-router-dom";
import Headers from "../Headers/Headers";
import { Bars } from "react-loader-spinner";
const Home = () => {
  const navigation = useNavigation();

  return (
    <div className="">
      <Headers></Headers>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-screen">
          <Bars
            height="80"
            width="80"
            color="gray"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Home;

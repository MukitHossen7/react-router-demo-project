import { Outlet, useNavigation } from "react-router-dom";
import Headers from "../Headers/Headers";
import { Bars } from "react-loader-spinner";
import Footer from "../Footer/Footer";
const Home = () => {
  const navigation = useNavigation();

  return (
    <div className="h-screen">
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
      <Footer></Footer>
    </div>
  );
};

export default Home;

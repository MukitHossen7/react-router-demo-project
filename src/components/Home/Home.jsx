import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";

const Home = () => {
  return (
    <div className="">
      <Headers></Headers>

      <Outlet></Outlet>
    </div>
  );
};

export default Home;

import { Outlet } from "react-router-dom";
import Headers from "../Headers/Headers";

const Home = () => {
  return (
    <div>
      <Headers></Headers>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;

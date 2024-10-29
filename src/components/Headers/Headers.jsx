import "./Headers.css";
import { NavLink } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav className="w-11/12 mx-auto flex gap-2 justify-between items-center bg-slate-200 px-5 py-3 rounded-xl font-semibold text-xl mt-10">
        <NavLink to="/homes">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/blogs">Blog</NavLink>
      </nav>
    </div>
  );
};

export default Headers;

import { Link } from "react-router-dom";
import navImg from "../assets/NavBg.png";
import logo from "../assets/logo1.png";

const NavBar = () => {
  return (
    <nav
      className="flex items-center justify-center gap-2 text-white text-center px-4 py-3 bg-cover bg-top "
      style={{ backgroundImage: `url('${navImg}')` }} // Replace with actual path
    >
      <img className="max-w-12" src={logo} alt="" />
      <Link to="/" className="text-2xl  font-bold merienda tracking-wide">
        Espresso Emporium
      </Link>
    </nav>
  );
};

export default NavBar;

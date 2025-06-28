import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Root;

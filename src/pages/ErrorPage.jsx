import { Link } from "react-router-dom";
import second from "../assets/404.gif";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <Link
        to="/"
        className="flex items-center max-w-[1320px] mx-auto pt-5  gap-2 text-lg"
      >
        <FaArrowLeft /> Back to Home
      </Link>
      <div className="w-full h-screen flex justify-center items-center">
        <img className="w-[75%] h-[80%]" src={second} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;

import follow1 from "../assets/folloUs/Rectangle 9.png";
import follow2 from "../assets/folloUs/Rectangle 10.png";
import follow3 from "../assets/folloUs/Rectangle 11.png";
import follow4 from "../assets/folloUs/Rectangle 12.png";
import follow5 from "../assets/folloUs/Rectangle 13.png";
import follow6 from "../assets/folloUs/Rectangle 14.png";
import follow7 from "../assets/folloUs/Rectangle 15.png";
import follow8 from "../assets/folloUs/Rectangle 16.png";
import { Link } from "react-router-dom";

const FollowUs = () => {
  return (
    <section className="text-center">
      <p>--- Follow Us ---</p>
      <h2 className="text-4xl font-bold mb-4">Follow on Instagram</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto px-4 my-10">
        <Link to="/">
          <img src={follow1} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <img src={follow2} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <img src={follow3} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <img src={follow4} alt="" />
        </Link>
        <Link to="/">
          {" "}
          <img src={follow5} alt="" />
        </Link>
        <Link to="/">
          <img src={follow6} alt="" />
        </Link>
        <Link to="/">
          <img src={follow7} alt="" />
        </Link>
        <Link to="/">
          <img src={follow8} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default FollowUs;

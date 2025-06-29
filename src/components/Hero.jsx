import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center min-h-screen flex items-center text-white relative"
      style={{ backgroundImage: `url('${heroImg}')` }}
    >
      <div className="bg-black/60 w-full h-full absolute top-0 left-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4  py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight merienda">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          It’s coffee time — Sip & Savor — Relaxation in every sip! Get the best
          coffee in town at Espresso Emporium.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#C49A6C] hover:bg-[#a67e51] text-white rounded-0 hover:rounded-2xl font-semibold transition merienda"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero;

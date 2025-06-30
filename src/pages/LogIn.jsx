import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../assets/addCoffee.png"; // Replace with actual image
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const LogIn = () => {
  const [passShow, setPassShow] = useState(false);
  const [error, setError] = useState("");
  const { user, emailPassLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (user) {
  //       toast.error("User all ready logged in!");
  //       return navigate(location.state ? location.state : "/");
  //     }
  //   }, [user, navigate, location]);

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    emailPassLogIn(email, password)
      .then((res) => {
        toast.success("User Successfully Logged In!");
        navigate(location?.state ? location.state : "/");
        setError("");
      })
      .catch((er) => {
        const finalError = er.code.split("/");
        setError(finalError ? finalError[1] : er.code);
      });
  };
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-[#331A15] px-4 py-12"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="bg-black/20 absolute w-full h-full" />
      {/* 🏠 Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 bg-[#C49A6C] text merienda px-4 py-2 rounded hover:bg-[#a67e51] font-semibold transition"
      >
        Home
      </Link>
      <div className="bg-[#ECEAE3]/20 backdrop-blur-md text rounded-xl p-8 w-full max-w-md shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text merienda">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 text">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm merienda">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm merienda">
              Password
            </label>
            <div className="flex">
              <input
                type={passShow ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                placeholder="••••••••"
              />
              <button
                onClick={() => setPassShow(!passShow)}
                className="rounded bg-white border border-[#331A15]/30 text px-2 transition duration-1000"
              >
                {passShow ? (
                  <LuEyeClosed className="text-lg " />
                ) : (
                  <LuEye className="text-lg" />
                )}
              </button>
            </div>
            {error ? <span className="text-red-600">{error}</span> : <span />}
            <div className="text-left mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-[#331A15] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C49A6C] hover:bg-[#a67e51] merienda border border-[#331A15]/50 font-semibold py-2 px-4 rounded transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm mt-6 text-center text">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-[#C49A6C] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LogIn;

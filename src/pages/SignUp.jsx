import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginBg from "../assets/addCoffee.png"; // Adjust path as needed
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { LuEye, LuEyeClosed } from "react-icons/lu";

const SignUp = () => {
  const [passShow, setPassShow] = useState(false);
  const [passShowC, setPassShowC] = useState(false);
  const [error, setError] = useState("");
  const { userSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    const userInfo = { name, email };

    if (password !== confirmPassword) {
      return setError("Password has to be same!");
    }
    userSignUp(email, password)
      .then((res) => {
        // console.log(res);
        fetch("https://coffee-house-black-three.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((result) => {
            // console.log(result);
            toast.success("User Successfully created!");
            navigate(location.state ? location.state : "/");
            setError("");
          });
      })
      .catch((er) => {
        const finalError = er.code?.split("/");
        setError(finalError ? finalError[1] : er.code);
      });
  };
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12 relative"
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

      <div className="bg-[#ECEAE3]/50 backdrop-blur-md text rounded-xl p-8 w-full max-w-md shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center merienda">
          Create an Account
        </h2>

        <form onSubmit={handleCreateUser} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">
              Password
            </label>
            <div className="flex">
              <input
                type={passShow ? "text" : "password"}
                name="password"
                required
                className="w-full px-4 py-2 rounded bg-white border  border-[#331A15]/30 text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                placeholder="••••••••"
              />
              <button
                onClick={() => setPassShow(!passShow)}
                className="rounded  bg-white border  border-[#331A15]/30 text px-2 transition duration-1000 "
              >
                {passShow ? (
                  <LuEyeClosed className="text-lg " />
                ) : (
                  <LuEye className="text-lg" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm">
              Confirm Password
            </label>
            <div className="flex">
              {" "}
              <input
                //   onChange={handlePass}
                type={passShowC ? "text" : "password"}
                name="confirmPassword"
                required
                className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
                placeholder="••••••••"
              />
              <button
                onClick={() => setPassShowC(!passShowC)}
                className="rounded bg-white border border-[#331A15]/30 text px-2 transition duration-1000"
              >
                {passShowC ? (
                  <LuEyeClosed className="text-lg " />
                ) : (
                  <LuEye className="text-lg" />
                )}
              </button>
            </div>

            <span className="text-red-500">{error}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C49A6C] hover:bg-[#a67e51] text merienda font-semibold py-2 px-4 rounded transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm mt-6 text-center text">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#C49A6C] hover:underline hover:underline-offset-1"
          >
            Log In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

import React from "react";
import { Link } from "react-router-dom";
import loginBg from "../assets/addCoffee.png"; // Adjust path as needed

const SignUp = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12 relative"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
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

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded bg-white/20 border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded bg-white/20 border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded bg-white/20 border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block mb-1 text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              required
              className="w-full px-4 py-2 rounded bg-white/20 border border-[#331A15]/30 text  text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="••••••••"
            />
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
          <Link to="/login" className="text-[#C49A6C] hover:underline">
            Sign in here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

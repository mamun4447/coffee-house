import { Link } from "react-router-dom";
import loginBg from "../assets/addCoffee.png"; // Replace with actual image

const LogIn = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-[#331A15] px-4 py-12"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="bg-[#ECEAE3]/50 backdrop-blur-md text rounded-xl p-8 w-full max-w-md shadow-lg border border-white/20">
        <h2 className="text-3xl font-bold mb-6 text-center text merienda">
          Login
        </h2>

        <form className="space-y-4 text">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm merienda">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded bg-white border border-[#331A15]/30 text focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm merienda">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 rounded bg-white border text border-[#331A15]/30  focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="••••••••"
            />
            <div className="text-left mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-[#C49A6C] hover:underline"
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
            Sign up here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LogIn;

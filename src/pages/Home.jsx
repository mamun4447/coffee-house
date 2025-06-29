import { useLoaderData } from "react-router-dom";
import About from "../components/About";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <Hero />
      <About />
      <PopularProducts Coffee={loadedData} />
      <FollowUs />
    </div>
  );
};

export default Home;

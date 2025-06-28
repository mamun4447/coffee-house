import About from "../components/About";
import FollowUs from "../components/FollowUs";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <PopularProducts />
      <FollowUs />
    </div>
  );
};

export default Home;

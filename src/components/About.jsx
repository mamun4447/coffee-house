import icon1 from "../assets/1.png";
import icon2 from "../assets/2.png";
import icon3 from "../assets/3.png";
import icon4 from "../assets/4.png";

const products = [
  {
    id: 1,
    title: "Awesome Aroma",
    details:
      "You will definitely be a fan of the design & aroma of your coffee",
    image: icon1, // Replace with actual paths
  },
  {
    id: 2,
    title: "High Quality",
    details: "We served the coffee to you maintaining the best quality",
    image: icon2,
  },
  {
    id: 3,
    title: "Pure Grades",
    details: "The coffee is made of the green coffee beans which you will love",
    image: icon3,
  },
  {
    id: 4,
    title: "Proper Roasting",
    details: "Your coffee is brewed by first roasting the green coffee beans",
    image: icon4,
  },
];

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14 mb-10 px-[50px] md:px-[100px] lg:px-[250px] justify-center bg-[#ECEAE3] min-h-[300px]">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-17 h-17 object-cover"
          />
          <div className="md:text-left my-4 text-center">
            <h3 className="text-xl font-bold merienda">{item.title}</h3>
            <p className="">{item.details}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;

import footerBg from "../assets/28.png";

const Copyright = () => {
  return (
    <div
      className="relative text-center p-2 bg-black/50 bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url('${footerBg}')` }}
    >
      <div className="bg-black/60  w-full h-full absolute top-0 left-0 z-0"></div>
      <span className="relative text-white z-10">
        {" "}
        © {new Date().getFullYear()} Espresso Emporium. All rights reserved.
      </span>
    </div>
  );
};

export default Copyright;

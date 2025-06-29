import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import footerBg2 from "../assets/13.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      className="text-[#331A15] py-12 px-24 bg-cover "
      style={{ backgroundImage: `url('${footerBg2}')` }}
    >
      <div className="flex px-10 w-[90%] mx-auto">
        <img src={logo} className="w-20" alt="" />
      </div>

      <div className="flex w-[90%] mx-auto px-10">
        {/* <==Social Media==> */}
        <section>
          <h2 className="text-3xl my-2 merienda">Espresso Emporium</h2>
          <p className="my-2">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          {/* <==Icons==> */}
          <div className="flex gap-2 text-2xl my-2">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h3 className="text-3xl my-2 merienda">Get In Touch</h3>
          <div className="flex items-center gap-2 my-2">
            <FaPhoneAlt /> +8801789997959
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FaMailBulk /> abdullah.mamun67896@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <MdLocationCity /> Dhaka city, Bangladesh
          </div>
        </section>
        {/* <==Email Form==> */}
        <section className="w-full pl-20">
          <h2 className="text-3xl mb-2 merienda">Contact With Us</h2>
          <input
            className="bg-white w-full border-gray-500 rounded-lg p-3"
            type="text"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="bg-white  w-full border-gray-500 rounded-lg p-3 mt-2"
            type="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="bg-white  w-full border-gray-500 rounded-lg p-4 my-2"
            type="filed"
            name="text"
            placeholder="Message"
          />
          <input
            className="btn text-lg  text-[#331A15] border-[#331A15] rounded-full border-2 hover:bg-[#331A15] hover:text-white"
            type="submit"
            value="Send Email"
            id=""
          />
        </section>
      </div>
    </footer>
  );
};

export default Footer;

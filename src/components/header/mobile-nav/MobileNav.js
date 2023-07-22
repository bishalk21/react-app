import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/logo.png";

const MobileNav = ({ mobileNavbar, handleOnClick }) => {
  return (
    <nav
      className={`bg-[#100f0f] w-full h-full z-20 text-[lightgray] top-0 left-0 fixed ${
        mobileNavbar ? "flex !important" : "hidden !important"
      }`}
    >
      <i
        class="fa-sharp fa-solid fa-xmark absolute top-[70px] right-8 cursor-pointer text-4xl"
        onClick={() => handleOnClick()}
      ></i>

      <div className="absolute h-28 top-8 left-14 cursor-pointer">
        {" "}
        <Link to="/" onClick={() => handleOnClick()}>
          <img
            src={imgLogo}
            alt="logo"
            loading="lazy"
            className="w-32 rounded-3xl"
          />
        </Link>
      </div>

      <div className="w-full flex items-center justify-center flex-col uppercase text-2xl gap-8 top-[54%] left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
        <Link
          onClick={() => handleOnClick()}
          className="text-[lightgray] hover:underline"
          to="about"
        >
          About Us
        </Link>
        <Link
          onClick={() => handleOnClick()}
          className="text-[lightgray] hover:underline"
          to="contact"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;

import React from "react";
import Logo from "../assets/logo.svg";
import "../style/fonts.css";
import info from "../assets/info.svg";
import contact from "../assets/email.svg";
import Profil from "../assets/profile.svg";
import Search from "../assets/search.svg";
import "../style/styles.css";
const Navbar = () => {
  return (
    <nav className=" font-normal px-2 py-8 width70">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <img
          src={Logo}
          alt="Mouhami-dz"
          className="text-white text-lg font-bold"
        ></img>

        {/* Navigation Links */}
        <div className="space-x-4 flex justify-between gap-12 text-sm font-medium">
          <a
            href="#"
            className=" nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={info}></img>
            About
          </a>
          <a
            href="#"
            className=" nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={contact}></img>
            Contact
          </a>
          <a
            href="#"
            className=" nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={Search}></img>
            Search
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

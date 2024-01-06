import React from "react";
import Logo from "../assets/logo.svg";
import "../style/fonts.css";
import info from "../assets/info.svg";
import contact from "../assets/email.svg";
import Profil from "../assets/profile.svg";
import Search from "../assets/search.svg";
import { Link } from "react-router-dom";
import "../style/styles.css";
import LogoComponent from "./Logo";
const Navbar = () => {
  return (
    <nav className=" font-normal px-2 py-8 width70">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <LogoComponent />

        {/* Navigation Links */}
        <div className="space-x-4 flex justify-between gap-12 text-sm font-medium">
          <Link
            to="/about"
            className="nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={info}></img>
            About
          </Link>
          <Link
            to="/contact"
            className="nav-Links  flex items-center gap-1 text-[#26495D]"
          >
            <img src={contact}></img>
            Contact
          </Link>
          <Link
            to="/search"
            className=" nav-Links flex items-center gap-1 text-[#26495D]"
          >
            <img src={Search}></img>
            Search
          </Link>
          <Link
            to="/user-edit"
            className="nav-Links flex items-center gap-1 text-[#26495D]"
          >
            <img src={Profil}></img>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

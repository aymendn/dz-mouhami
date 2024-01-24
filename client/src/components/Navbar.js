import React, { useEffect } from "react";
import Logo from "../assets/logo.svg";
import info from "../assets/info.svg";
import contact from "../assets/email.svg";
import Profil from "../assets/profile.svg";
import Search from "../assets/search.svg";
import "../style/styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  // get current url, if it's /home, show the get started button
  const currentUrl = window.location.pathname;
  const isHome = currentUrl === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const handleResize = () => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <nav className="py-3 md:py-4 transition-all duration-150 font-normal px-2 md:px-4 lg:px-8 sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {isMobile ? (
        <>
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <LogoComponent />

            {/* Hamburger menu */}
            <MenuIcon onClick={handleMenuClick} isOpen={isMenuOpen} />
          </div>
          <div className={isMenuOpen ? "max-h-screen" : "h-0 p-0"}>
            <div
              className={`${
                isMenuOpen ? "max-h-screen" : "-top-8 opacity-0 scale-95"
              } max-h-max overflow-hidden  absolute top-0 left-0 right-0 w-full bg-white -z-50 flex flex-col gap-4 items-center py-6 px-2 pt-16 shadow-md transition-all duration-100`}
            >
              {/* Navigation Links */}
              <LinksWrapper className="space-y-4 flex-col text-sm font-medium" />

              {/* Get Started Button, show only on home screen*/}
              {isHome && <GetStartedButton />}
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto flex justify-between items-center width70 px-2">
          {/* Logo */}
          <LogoComponent />

          {/* Navigation Links */}
          <LinksWrapper className="space-x-4 flex justify-between gap-12 text-sm font-medium" />

          {/* Get Started Button */}
          {isHome && <GetStartedButton />}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

function MenuIcon({ onClick, isOpen = true }) {
  return (
    // show a circle grey on hover, make it small then grow it
    <button className="flex flex-col gap-1" onClick={onClick}>
      <div
        className={
          "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
          (isOpen ? " rotate-45 translate-y-1.5" : "")
        }
      ></div>
      <div
        className={
          "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
          (isOpen ? "opacity-0 bg-transparent" : "")
        }
      ></div>
      <div
        className={
          "w-5 h-[2px] bg-[#26495D] rounded-full transition-all" +
          (isOpen ? " -rotate-45 -translate-y-1.5" : "")
        }
      ></div>
    </button>
  );
}

function GetStartedButton({}) {
  return (
    <button className="bg-[#E5F2FA] font-semibold text-[#09283A] rounded-full px-6 py-2 hover:bg-[#d7ebf8] border-2 border-[#194f6e1b] hover:border-[#194f6e54] transition-all duration-100">
      Get Started
    </button>
  );
}

function LinksWrapper({ className }) {
  return (
    <div className={className}>
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
  );
}

function LogoComponent() {
  return (
    <Link to="/">
      <img
        src={Logo}
        alt="Mouhami-dz"
        className="text-white text-lg font-bold"
      ></img>
    </Link>
  );
}

import info from "../assets/info_nav.svg";
import contact from "../assets/email_nav.svg";
import profilePicture from "../assets/profile_placeholder.png";
import LogoComponent from "./Logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const ProfileNavbar = () => {
  const { t } = useTranslation();

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
    <div className="bg-[#094B72]">
      <nav className=" font-normal px-8 py-4">
        {isMobile ? (
          <>
            <div className=" mx-auto flex justify-between items-center z-50">
              {/* Logo */}
              <LogoComponent isWhite={true} to="/dashboard" />

              {/* Hamburger menu */}
              <MenuIcon onClick={handleMenuClick} isOpen={isMenuOpen} />
            </div>
            <div className={isMenuOpen ? "max-h-screen " : "h-0 p-0"}>
              <div
                className={`${
                  isMenuOpen
                    ? "max-h-screen"
                    : "-top-8 opacity-0 scale-95 pointer-events-none"
                } -z-10 max-h-max overflow-hidden  absolute top-0 left-0 right-0 w-full bg-white  flex flex-col  items-center justify-center py-6 px-2 pt-20 shadow-md transition-all duration-100`}
              >
                {/* Navigation Links */}
                <div className="flex flex-col font-medium">
                  <CustomLink name={t("appointments")} to="/appointments" />
                  <CustomLink name={t("requests")} to="/requests" />
                  <CustomLink name={t("editProfile")} to="/edit" />
                  <CustomLink name={t("signOut")} to="/" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className=" mx-auto flex justify-between items-center">
            {/* Logo */}
            <LogoComponent isWhite={true} to="/dashboard" />
            {/* Navigation Links */}
            <div className="space-x-4 flex justify-end gap-12 text-sm font-medium">
              <Link to="/about" className="flex items-center gap-1 text-white">
                <img src={info}></img>
                {t("about")}
              </Link>
              <Link
                to="/contact"
                className=" flex items-center gap-1 text-white"
              >
                <img src={contact}></img>
                {t("contact")}
              </Link>
              <img src={profilePicture} className="w-8 h-8 rounded-full"></img>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default ProfileNavbar;

function MenuIcon({ onClick, isOpen = true }) {
  return (
    // show a circle grey on hover, make it small then grow it
    <button className="flex flex-col gap-1" onClick={onClick}>
      <div
        className={
          "w-5 h-[2px] bg-white rounded-full transition-all" +
          (isOpen ? " rotate-45 translate-y-1.5" : "")
        }
      ></div>
      <div
        className={
          "w-5 h-[2px] bg-white rounded-full transition-all " +
          (isOpen ? "opacity-0" : "")
        }
      ></div>
      <div
        className={
          "w-5 h-[2px] bg-white rounded-full transition-all" +
          (isOpen ? " -rotate-45 -translate-y-1.5" : "")
        }
      ></div>
    </button>
  );
}

function CustomLink({ name, to }) {
  return (
    <Link
      className=" py-1 px-4 hover:bg-slate-200 rounded-full text-center mb-1"
      to={to}
    >
      {name}
    </Link>
  );
}

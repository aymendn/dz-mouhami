import info from "../../assets/info_nav.svg";
import contact from "../../assets/email_nav.svg";
import profilePicture from "../../assets/profile_placeholder.png";
import LogoComponent from "../../components/Logo";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SvgColor from "react-svg-color";
import { useTranslation } from "react-i18next";
import { useUser } from "../../utils/UseTokenHook";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import Profil from "../../assets/profile.svg";
import LogoutSvg from "../../assets/logout.svg";
import { useLocation } from "react-router-dom";
import SwitchLanguage from "../../components/SwitchLanguage";
const AdminNavbar = () => {
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
              <AdminLogo />

              {/* Spacer */}
              <div className="flex-1"></div>

              {/* Profile Icon */}
              <LoggedInComponent />

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
                  <SwitchLanguage />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className=" mx-auto flex justify-between items-center">
            {/* Logo */}
            <AdminLogo />

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Switch Language */}
            <SwitchLanguage />

            {/* Navigation Links */}
            <div className="space-x-4 flex justify-end gap-12 text-sm font-medium ms-12">
              <Link to="/about" className="flex items-center gap-1 text-white">
                <img src={info}></img>
                About
              </Link>
              <Link
                to="/contact"
                className=" flex items-center gap-1 text-white"
              >
                <img src={contact}></img>
                Contact
              </Link>

              {/* Profile icon */}
              <LoggedInComponent />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default AdminNavbar;

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

function AdminLogo() {
  // put a "ADMIN DASHBOARD" text on the end of the logo
  // return (<LogoComponent isWhite={true} to="/dashboard" />);
  return (
    <div className="flex items-top gap-4">
      <LogoComponent isWhite={true} to="/admin" />
      <p className="text-white font-medium opacity-70">Admin Dashboard</p>
    </div>
  );
}

function LoggedInComponent() {
  const { t } = useTranslation();
  const { user, logout } = useUser();

  if (!user) {
    return null;
  }

  const profileUrl = user.isClient ? "/user-edit" : "/edit";

  const profileImg = user?.userData?.picture || Profil;

  return (
    <Menu
      menuButton={
        <MenuButton>
          <img
            className="w-10 h-10 rounded-full border-2 border-[#26495d6c] mx-4"
            src={profileImg}
          ></img>
        </MenuButton>
      }
      transition
    >
      <MenuItem className="flex flex-row gap-2 items-center" onClick={logout}>
        <img src={LogoutSvg}></img>
        <span className="font-medium text-red-500">{t("signOut")}</span>
      </MenuItem>
    </Menu>
  );
}

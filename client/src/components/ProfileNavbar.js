import info from "../assets/info_nav.svg";
import contact from "../assets/email_nav.svg";
import Logo from "../assets/logo.svg";
import profilePicture from "../assets/profile_placeholder.png";
import SvgColor from "react-svg-color";
const ProfileNavbar = () => {
  return (
    <div className="bg-[#094B72]">
      <nav className=" font-normal px-24 py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <SvgColor svg={Logo} colors={["#FFF", "#FFF"]} />
          {/* Navigation Links */}
          <div className="space-x-4 flex justify-end gap-12 text-sm font-medium">
            <a href="#" className=" flex items-center gap-1 text-white">
              <img src={info}></img>
              About
            </a>
            <a href="#" className=" flex items-center gap-1 text-white">
              <img src={contact}></img>
              Contact
            </a>
            <img src={profilePicture} className="w-8 h-8 rounded-full"></img>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProfileNavbar;

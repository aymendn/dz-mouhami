import React from "react";
import Logo from "../assets/logo.svg";
import SvgColor from "react-svg-color";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#094B72] text-[#FFFFFF99] py-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">
        {/* Footer Text */}
        <div className="w-full sm:w-2/3 lg:w-3/4 p-2 sm:p-4 md:p-8">
          <SvgColor svg={Logo} colors={["#FFF", "#FFF"]} />
          <p className="text-sm py-4 md:w-96">
            All rights reserved. © 2023 DZ-Mouhami. Your trusted source for
            legal expertise in Algeria.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="w-full text-sm sm:w-1/3 lg:w-1/4 mt-4 sm:mt-0 pt-0 sm:pt-8">
          <ul className="flex flex-col md:flex-row justify-between px-2 gap-2">
            <li className="mb-2">
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="hover:underline">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

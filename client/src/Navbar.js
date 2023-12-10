import React from 'react';
import Logo from './Assets/Logo.png'
import './style/fonts.css'
const Navbar = () => {
  return (
    <nav className=" font-normal px-24 py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Mouhami-dz"
          className="text-white text-lg font-bold"
        ></img>

        {/* Navigation Links */}
        <div className="space-x-4 flex justify-between gap-12 text-md ">
          <a href="#" className="text-[#2D2F30]">
            Contact
          </a>
          <a href="#" className="text-[#2D2F30]">
            A propos
          </a>
          <a href="#" className="text-[#2D2F30]">
            Politique de confidentialité
          </a>
          <a href="#" className="text-[#2D2F30]">
            Termes
          </a>
        </div>

        {/* Get Started Button */}
        <button className="bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-blue-100 hover:duration-500 hover:shadow-md focus:outline-none">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

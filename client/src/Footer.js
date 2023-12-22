import React from 'react';
import Logo from './Assets/Group 505.png';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-8 md:px-16 lg:px-32 bg-[#094B72] text-[#FFFFFF99] py-12 h-64">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between">

        {/* Footer Text */}
        <div className="w-full sm:w-2/3 lg:w-3/4 p-4 sm:p-8 md:p-16">
          <img
            src={Logo}
            alt="Mouhami-dz"
            className="text-white text-lg font-bold"
          ></img>
          <p className="text-sm py-4 md:w-96">
            All rights reserved. © 2023 DZ-Mouhami. Your trusted source for legal expertise in Algeria.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="w-full text-sm sm:w-1/3 lg:w-1/4 mt-4 sm:mt-0">
          <ul className="grid grid-cols-1 sm:grid-cols-4 gap-8 list-none">
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Logo from './Assets/Group 505.png'
const Footer = () => {
  return (
    <footer className=" px-32 bg-[#094B72] text-[#FFFFFF99] py-12 h-64" >
      <div className="container mx-auto flex  justify-between  ">
        {/* Footer Text */}
        <div className="w-full p-8  md:w-2/3 lg:w-3/4">
        <img
          src={Logo}
          alt="Mouhami-dz"
          className=" text-white text-lg font-bold"
        ></img>
          <p className="text-sm py-4 w-96 ">
            All rights reserved. © 2023 DZ-Mouhami. Your trusted source for legal expertise in Algeria.
          </p>
        </div>

        {/* Footer Columns */}
        <div className=" w-full text-sm  md:w-1/3 lg:w-1/4 mt-4 md:mt-0">
          <ul className="grid grid-cols-4 gap-8 list-none">
            <li className="mb-2"><a href="#" className="hover:underline">Contacte</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">propos</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Politique </a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Termes </a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

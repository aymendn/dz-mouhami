import React from "react";
import locationlogo from "../assets/location.svg";
import { Link } from "react-router-dom";

const CardLawyer = ({ name, location, categories, description, image }) => {
  return (
    <Link to="/lawyer">
      <div className="transform duration-150 hover:bg-gray-100 hover:border-gray-300 border-gray-100 transition  ease-in-out  h-[234px] bg-white p-4 rounded-lg my-2 flex cursor-pointer border-2 w-full">
        {/* Image on the left */}
        <img
          src={image}
          className="w-full md:w-64 h-[200px] rounded-md mr-4 object-cover"
        />

        <div className="rounded-lg overflow-hidden">
          {/* Name */}
          <h2 className="text-xl text-[#094B72] font-medium mb-1">{name}</h2>

          {/* Localization */}
          <p className="flex items-center  mb-2 text-[#094b72cf] ">
            <img src={locationlogo} alt="Location" className="mr-1 w-4" />
            {location}
          </p>

          {/* Categories psk c un tableau asslan */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category, index) => (
              <div
                key={index}
                className="text-[#094B72] border-2 border-yellow-400 rounded-full  py-1 px-3 text-center"
              >
                <p className="text-sm font-semibold">{category}</p>
              </div>
            ))}
          </div>

          {/* Small text */}
          <p className="text-[#708FA2] text-sm mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardLawyer;

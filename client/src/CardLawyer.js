// CardLawyer.jsx
import React from "react";
import locationlogo from "./Assets/location.png";

const CardLawyer = ({ name, location, categories, description, image }) => {
  return (
    <div className="transform hover:scale-110 transition duration-300 ease-in-out w-[506px] h-[234px] bg-white p-4 rounded-lg shadow-md p-4 m-4 flex">
      {/* Image on the left */}
      <img src={image} className="w-64 h-[200px] rounded-md mr-4"  />

      <div className="rounded-lg overflow-hidden">
        {/* Name */}
        <h2 className="text-xl text-[#094B72] font-medium mb-2">{name}</h2>

        {/* Localization */}
        <p className="flex items-center font-medium mb-2 text-[#094B72] ">
          <img src={locationlogo} alt="Location" className="mr-2 " />
          {location}
        </p>

        {/* Categories psk c un tableau asslan */}
        <div className="flex gap-2">
          {categories.map((category, index) => (
            <div key={index} className="text-[#094B72] border-2 border-yellow-400 rounded-3xl w-24 p-1 text-center ">
              <p className="text-sm font-semibold">{category}</p>
            </div>
          ))}
        </div>

        {/* Small text */}
        <p className="text-[#708FA2] text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardLawyer;

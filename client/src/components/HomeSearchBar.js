import React from "react";
import SearchIcon from "../assets/search.svg";
import SvgColor from "react-svg-color";
import LocationIcon from "../assets/location.svg";

const HomeSearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Performing search...");
  };

  return (
    <div className="max-w-4xl mx-auto border-solid border-2 border-[#d8ebf6] bg-white flex flex-row justify-between items-center w-full  p-[6px] pl-8  rounded-full">
      {/* category icon */}
      <div className="w-14 me-2">
        <SvgColor svg={SearchIcon} colors={["#094b72", "#094b72"]} />
      </div>
      <input
        type="text"
        placeholder="Lawyer, place,..."
        className=" text-[rgba(16,_63,_91,_0.5)] outline-none border-none w-full"
      />
      {/*a vertical border */}
      <div className="border-r-2 border-[#d8ebf6] h-10 mx-3"></div>
      {/* location icon */}
      <div className="w-14 me-2">
        <SvgColor svg={LocationIcon} colors={["#094b72", "#094b72"]} />
      </div>
      <input
        type="text"
        placeholder="Lawyer, place,..."
        className=" text-[rgba(16,_63,_91,_0.5)] outline-none border-none w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-[#094b72] flex flex-row justify-center  items-center rounded-full cursor-pointer px-10 py-3 hover:opacity-90"
      >
        <div className=" text-[#f5fbff]">Search</div>
      </button>
    </div>
  );
};

export default HomeSearchBar;

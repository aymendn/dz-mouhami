import React from "react";
import SearchIcon from "../../assets/search.svg";
import SvgColor from "react-svg-color";

const SearchBar = () => {
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Performing search...");
  };

  return (
    <div className="border-solid border-[#d8ebf6] bg-white flex flex-row justify-between items-center w-full  p-[6px] pl-8 border rounded-full">
      <input
        type="text"
        placeholder="Lawyer, place,..."
        className=" text-[rgba(16,_63,_91,_0.5)] outline-none border-none"
      />
      <button
        onClick={handleSearch}
        className="bg-[#094b72] flex flex-row justify-center  items-center rounded-full cursor-pointer px-6 py-2 hover:opacity-90"
      >
        <div className="w-4 mr-1">
          <SvgColor svg={SearchIcon} colors={["#FFF", "#FFF"]} />
        </div>
        <div className="text-center text-base  text-[#f5fbff]">Search</div>
      </button>
    </div>
  );
};

export default SearchBar;

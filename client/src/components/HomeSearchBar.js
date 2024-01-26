import React from "react";
import SearchIcon from "../assets/search.svg";
import SvgColor from "react-svg-color";
import LocationIcon from "../assets/location.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { t } from "i18next";
const HomeSearchBar = () => {
  const [lawyerCategory, setLawyerCategory] = useState("");
  const [location, setLocation] = useState("");
  const Navigate = useNavigate();

  const HandleClick = () => {
    console.log("Lawyer Category:", lawyerCategory);
    console.log("Location:", location);
    const lawyer_location = lawyerCategory + " " + location;

    Navigate(`/search?query=${lawyer_location}`);

    // Navigate(`http://127.0.0.1:8000/core/lawyer-profile-search/?lawyer_category=${lawyerCategory}&location=${location}`)
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-4xl  mx-4 border-solid border-2 border-[#d8ebf6] bg-white flex flex-row justify-between items-center w-full  p-[6px] ps-8  rounded-full">
        <div className="flex flex-row w-full items-center justify-start">
          {/* category icon */}
          <SvgColor svg={SearchIcon} colors={["#094b72", "#094b72"]} />
          <input
            type="search"
            name="lawyerCategory"
            placeholder={t("search")}
            className=" text-[rgba(16,_63,_91,_0.5)]  border-none outline-none w-full m-2"
            value={lawyerCategory}
            onChange={(e) => setLawyerCategory(e.target.value)}
          />
        </div>

        <div className=" flex-row w-full items-center justify-start hidden md:flex">
          {/*a vertical border */}
          <div className="border-r-2 border-[#d8ebf6] h-10 mx-3"></div>
          {/* location icon */}
          <SvgColor svg={LocationIcon} colors={["#094b72", "#094b72"]} />
          <input
            type="text"
            name="location"
            placeholder={t("place")}
            className=" text-[rgba(16,_63,_91,_0.5)] outline-none border-none w-full focus:outline-none m-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button
          type="submit"
          onClick={HandleClick}
          className="bg-[#094b72] flex flex-row justify-center  items-center rounded-full cursor-pointer px-10 py-3 hover:opacity-90"
        >
          <div className=" text-[#f5fbff]">Search</div>
        </button>
      </div>
    </div>
  );
};

export default HomeSearchBar;

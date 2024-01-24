import React from "react";
import SearchIcon from "../assets/search.svg";
import SvgColor from "react-svg-color";
import LocationIcon from "../assets/location.svg";
import axios from 'axios';
const HomeSearchBar = () => {
  
  axios.get('http://127.0.0.1:8000/lawyer-profile-search/?lawyer_category=some_category&location=some_location')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la requête ', error);
    });
  



  const handleSearch = () => {
    // Implement your search logic here
    console.log("Performing search...");
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" max-w-4xl  mx-4 border-solid border-2 border-[#d8ebf6] bg-white flex flex-row justify-between items-center w-full  p-[6px] pl-8  rounded-full">

        <div className="flex flex-row w-full items-center justify-start">
          {/* category icon */}
          <SvgColor svg={SearchIcon} colors={["#094b72", "#094b72"]} />
          <input
            type="search"
            name='lawyer_categorie'
            placeholder="Lawyer, place,..."
            className=" text-[rgba(16,_63,_91,_0.5)]  border-none outline-none w-full"
          />
        </div>

        <div className=" flex-row w-full items-center justify-start hidden md:flex">
          {/*a vertical border */}
          <div className="border-r-2 border-[#d8ebf6] h-10 mx-3"></div>
          {/* location icon */}
          <SvgColor svg={LocationIcon} colors={["#094b72", "#094b72"]} />
          <input
            type="text"
            name='location'
            placeholder="Lawyer, place,..."
            className=" text-[rgba(16,_63,_91,_0.5)] outline-none border-none w-full focus:outline-none"
          />
        </div>
        <Link to={`/search?query=${"query"}`}>
          <button
            onClick={handleSearch}
            className="bg-[#094b72] flex flex-row justify-center  items-center rounded-full cursor-pointer px-10 py-3 hover:opacity-90"
          >
            <div className=" text-[#f5fbff]">Search</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSearchBar;

import React from "react";
import SearchIcon from "../../assets/search.svg";
import SvgColor from "react-svg-color";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const [searchQuery, setSearchQuery] = useState(query || "");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="border-solid border-[#d8ebf6] bg-white flex flex-row justify-between items-center w-full  p-[6px] ps-8 border rounded-full">
      <input
        type="text"
        placeholder={t("search")}
        className=" text-[rgba(10,40,57,0.76)] outline-none border-none w-full p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-[#094b72] flex flex-row justify-center  items-center rounded-full cursor-pointer px-6 py-2 hover:opacity-90"
      >
        <div className="w-4 me-1">
          <SvgColor svg={SearchIcon} colors={["#FFF", "#FFF"]} />
        </div>
        <div className="text-center text-base  text-[#f5fbff]">
          {t("search")}
        </div>
      </button>
    </div>
  );
};

export default SearchBar;

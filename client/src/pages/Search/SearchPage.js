import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const searchLawyers = async ({
  query,
  categories,
  days,
  rating,
  page,
  limit,
}) => {
  const { data } = await axios.get("/core/lawyer-profile-search/", {
    params: {
      query,
      categories,
      days,
      rating,
      page,
      limit,
    },
  });
  return data;
};

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const categories = searchParams.get("categories");
  const days = searchParams.get("days");
  const rating = searchParams.get("rating");

  const { data, isLoading, isError, error } = useQuery(
    ["searchLawyers", { query }],
    searchLawyers
  );

  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen max-w-7xl mx-auto mb-12 mt-6 width70">
        {/* sidebar (1/3) */}
        <FilterSidebar rating={rating} categories={categories} days={days} />
        {/* main (2/3) */}
        <div className=" w-full lg:w-2/3 mx-2 lg:mx-   h-full rounded-2xl border-2 border-slate-100 p-8 max-w-2xl lg:max-w-full">
          <SearchBar />
          {isLoading && <Loading className={"py-24 px-2"} />}
          {isError && (
            <div className={"py-24 px-2 text-center"}>
              Error: {error.message}
            </div>
          )}
          {data && <SearchResults data={data} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;

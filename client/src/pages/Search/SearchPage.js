import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useTranslation } from "react-i18next";
import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import PaginationNav from "./PaginationNav";

const searchLawyers = async ({ query, categories, days, rating, page }) => {
  const { data } = await axios.get("/core/lawyer-profile-search/", {
    params: {
      query,
      categories,
      days,
      rating,
      page: page || 1,
      limit: 10,
    },
  });
  return data;
};

const refreshPageWithQueryParams = (query, categories, days, rating, page) => {
  const searchParams = new URLSearchParams();
  if (query) searchParams.append("query", query);
  if (categories) searchParams.append("categories", categories);
  if (days) searchParams.append("days", days);
  if (rating) searchParams.append("rating", rating);
  if (page) searchParams.append("page", page);
  window.location.search = searchParams.toString();
};

const refreshPageAndUpdateOnly = ({
  query,
  categories,
  days,
  rating,
  page,
}) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (query) searchParams.set("query", query);
  if (categories) searchParams.set("categories", categories);
  if (days) searchParams.set("days", days);
  if (rating) searchParams.set("rating", rating);
  if (page) searchParams.set("page", page);
  window.location.search = searchParams.toString();
};

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const categories = searchParams.get("categories");
  const days = searchParams.get("days");
  const rating = searchParams.get("rating");
  const page = searchParams.get("page");
  const pageNumber = parseInt(page) || 1;

  const { data, isLoading, isError, error } = useQuery(
    ["searchLawyers", { query, categories, days, rating, page }],
    searchLawyers
  );

  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen max-w-7xl mx-auto mb-12 mt-6 width70">
        {/* sidebar (1/3) */}
        <FilterSidebar onApply={refreshPageAndUpdateOnly} />
        {/* main (2/3) */}
        <div className="flex flex-col items-center w-full lg:w-2/3 mx-2 lg:mx-   h-full rounded-2xl border-2 border-slate-100 p-8 max-w-2xl lg:max-w-full">
          <SearchBar
            onSearch={(s) => refreshPageAndUpdateOnly({ query: s, page: 1 })}
          />
          {isLoading && <Loading className={"py-24 px-2"} />}
          {isError && (
            <div className={"py-24 px-2 text-center"}>
              Error: {error.message}
            </div>
          )}
          {data && <SearchResults data={data} />}
          <PaginationNav
            pagesCount={6}
            currentPage={pageNumber}
            onChanged={(newPage) => refreshPageAndUpdateOnly({ page: newPage })}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;

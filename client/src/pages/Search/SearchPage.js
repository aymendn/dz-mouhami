import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import {useTranslation} from "react-i18next";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import {UseQuery} from 'react-query'


const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    // Utiliser la valeur de query comme nécessaire
    console.log("Query:", query);

     axios.get(`http://127.0.0.1:8000/core/lawyer-profile-search/?query=${query}&days=&categories=&rating=&page=1&limit=5`)
       .then(response => {
        console.log(response)
       })
       .catch(error => {
          console.log(error)
       });
  }, [query]);


  const {t} = useTranslation();
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen max-w-7xl mx-auto mb-12 mt-6 width70">
        {/* sidebar (1/3) */}
        <FilterSidebar />
        {/* main (2/3) */}
        <div className=" w-full lg:w-2/3 mx-2 lg:mx-   h-full rounded-2xl border-2 border-slate-100 p-8 max-w-2xl lg:max-w-full">
          <SearchBar />
          <SearchResults />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;

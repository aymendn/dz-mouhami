import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSidebar from "./FilterSidebar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchPage = () => {
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

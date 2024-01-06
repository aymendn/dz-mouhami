import SvgColor from "react-svg-color";
import category from "../../assets/category.svg";
import location from "../../assets/location.svg";
import search from "../../assets/search.svg";
import HomeSearchBar from "../../components/HomeSearchBar";

const Main = () => {
  return (
    <div className="mx-auto text-center">
      {/* Heading */}
      <h1
        className="font-['Lexend_Exa'] font-semibold  mt-6 mb-3  text-[#0F3146] max-w-3xl mx-auto
      lg:text-6xl lg:-tracking-[0.42rem] lg:leading-tight
      md:text-5xl md:-tracking-[0.35rem] md:leading-tight
      sm:text-4xl sm:-tracking-[0.28rem] sm:leading-tight
      text-3xl -tracking-[0.21rem] leading-tight
      "
      >
        Your Gateway to Expert Legal Assistance.
      </h1>

      {/* Subheading */}
      <p
        className=" text-center text-[#708FA2] py-4 max-w-xl mx-auto  mb-3
      lg:text-xl lg:leading-normal
      md:text-lg md:leading-normal
      sm:text-base sm:leading-normal
      text-base leading-normal
      "
      >
        We are here to help you take care of your legality with the best
        service, especially for you.
      </p>

      {/* Search Bar Section */}
      <HomeSearchBar />

      {/* Categories Section */}
      <div className="flex flex-col  sm:flex-row justify-start items-center gap-x-[4rem] md:gap-x-[8rem] gap-y-2 px-4 py-4 pb-10 max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-0">
          <p className="flex items-center text-sm mb-2 text-[#708FA2]">
            <div className="max-w-[20px] mr-1">
              <SvgColor svg={category} colors={["#708FA2"]} />
            </div>
            <p>Main Categories</p>
          </p>
          <div className="flex justify-start gap-2">
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className="font-semibold">Places</p>
            </div>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className="font-semibold">Places</p>
            </div>
          </div>
        </div>

        <div>
          <p className="flex items-center text-sm mb-2 text-[#708FA2]">
            <div className="max-w-[20px] mr-1">
              <SvgColor svg={location} colors={["#708FA2"]} />
            </div>
            <p>Main Places</p>
          </p>
          <div className="flex justify-start gap-2">
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className="font-semibold">Categories</p>
            </div>
            <div className="text-[#496C80] border-2 border-yellow-400 rounded-3xl w-24 sm:w-32 text-xs p-1 text-center">
              <p className="font-semibold">Categories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

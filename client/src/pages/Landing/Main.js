import SvgColor from "react-svg-color";
import category from "../../assets/category.svg";
import location from "../../assets/location.svg";
import HomeSearchBar from "../../components/HomeSearchBar";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto text-center min-h-[calc(100vh-90px)] flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="font-['Domine'] font-bold  mt-6 mb-3  text-[#0F3146] max-w-3xl mx-auto leading-tight lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
        {t("landingTitle")}
      </h1>

      {/* Subheading */}
      <p className=" text-center text-[#708FA2] py-4 max-w-2xl mx-auto mb-3 leading-normal lg:text-xl md:text-lg sm:text-md text-sm">
        {t("landingSubtitle")}
      </p>

      {/* Search Bar Section */}
      <HomeSearchBar />

      {/* Categories Section */}
      <div className="flex flex-col  sm:flex-row justify-start items-center gap-x-[4rem] md:gap-x-[8rem] gap-y-2 px-4 py-4 pb-10 max-w-4xl mx-auto">
        <div className="mb-4 sm:mb-0">
          <p className="flex items-center text-sm mb-2 text-[#708FA2]">
            <div className="max-w-[20px] me-1">
              <SvgColor svg={category} colors={["#708FA2"]} />
            </div>
            <p>{t("mainCategories")}</p>
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
            <div className="max-w-[20px] me-1">
              <SvgColor svg={location} colors={["#708FA2"]} />
            </div>
            <p>{t("mainPlaces")}</p>
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

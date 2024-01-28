// TopRated.jsx
import React from "react";
import CardLawyer from "../../components/CardLawyer";
import lawyerPlaceholder from "../../assets/lawyer_placeholder.png";
import { useTranslation } from "react-i18next";
// import axios and use query
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const getLawyers = async () => {
  try {
    const { data } = await axios.get("/core/lawyer-profile-search/", {
      params: {
        limit: 4,
        page: 1,
      },
    });

    console.log(data);
    return data?.search_results || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

const TopRated = () => {
  const { t } = useTranslation();
  const { data: lawyers, isLoading, isError } = useQuery("lawyers", getLawyers);

  return (
    <div className="flex justify-center items-center">
      <div className=" my-12 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 max-w-[70rem] w-full">
        <div className="flex justify-between mb-4">
          <h1 className="font-['Domine'] font-semibold text-[#094B72E5] text-2xl md:text-3xl">
            {t("topRatedLawyers")}
          </h1>
          <button className="bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-[#094f773b] transition duration-50 text-sm md:text-base">
            {t("seeAll")}
          </button>
        </div>
        {isLoading ? (
          <Loading className="py-12 px-2" />
        ) : isError ? (
          <div>Error</div>
        ) : (
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4">
            {lawyers.map((lawyer, index) => (
              <CardLawyer key={index} {...lawyer} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopRated;

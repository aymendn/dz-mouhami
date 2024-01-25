// TopRated.jsx
import React from "react";
import CardLawyer from "../../components/CardLawyer";
import lawyerPlaceholder from "../../assets/lawyer_placeholder.png";
import { useTranslation } from "react-i18next";
const TopRated = () => {
  const { t } = useTranslation();

  // Tableau d'objets représentant les avocats
  const lawyersData = Array(4)
    .fill()
    .map((_) => ({
      name: "Mohammed amine ",
      location: "Tizi-Ouzou, Algeria",
      categories: ["Usurpation ", "Criminologie"],
      description:
        "je suis un avocat specialisé en affaire de crimes et d'usurpation d'identite  , je suis devouée et je suis passioné par mon travail",
      image: lawyerPlaceholder,
    }));

  return (
    <div className="flex justify-center items-center">
      <div className=" my-12 mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 2xl:mx-20 max-w-[70rem]">
        <div className="flex justify-between mb-4">
          <h1 className="font-['Domine'] font-semibold text-[#094B72E5] text-2xl md:text-3xl">
            {t("topRatedLawyers")}
          </h1>
          <button className="bg-[#094E771A] font-medium text-[#094B72E5] rounded-full px-6 py-2 hover:bg-[#094f773b] transition duration-50 text-sm md:text-base">
            {t("seeAll")}
          </button>
        </div>
        {/* opérateur spread (...) qui prend toutes les propriétés de l'objet lawyer et les passe en tant que props individuelles au composant CardLawyer. */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-4">
          {lawyersData.map((lawyer, index) => (
            <CardLawyer key={index} {...lawyer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRated;

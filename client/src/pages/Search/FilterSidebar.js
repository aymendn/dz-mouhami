import Filter from "../../assets/filter.svg";
import CloseIcon from "../../assets/close_small.svg";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const clearFilters = () => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("categories");
  searchParams.delete("days");
  searchParams.delete("rating");
  window.location.search = searchParams.toString();
};

const FilterSidebar = ({ onApply }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [days, setdays] = useState(searchParams.get("days"));
  const [rating, setRating] = useState(searchParams.get("rating"));
  const [categories, setcategories] = useState(searchParams.get("categories"));

  const daysOptions = [
    "Samedi",
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "jeudi",
    "Vendredi",
  ];
  const ratingOptions = ["5", "4", "3", "2", "1"];
  const categoriesOptions = ["Crime", "Civil", "Famille", "Aggression"];

  return (
    <div className="w-1/3 h-full rounded-2xl border-2 border-slate-100 p-8 me-5 hidden lg:block">
      <div className="flex justify-start items-center">
        <img src={Filter} className="w-5 me-3" alt="Filter Icon" />
        <h2 className="text-[#15394E] text-2xl font-bold">{t("filter")}</h2>
      </div>
      {/* 2 buttons in a row */}
      <div className="flex justify-start items-center mt-4">
        <button
          onClick={() => onApply({ days, rating, categories })}
          className="bg-[#094B72] text-white rounded-3xl px-8 py-2 text-base hover:opacity-80 transition-all me-2"
        >
          <p>{t("apply")}</p>
        </button>
        <button
          onClick={clearFilters}
          className="bg-gray-100 flex items-center text-[#103F5BE5] rounded-3xl px-8 py-2 text-base hover:opacity-80 hover:bg-gray-200 transition-all"
        >
          <img src={CloseIcon} className="w-2 me-2" alt="Close Icon" />
          <p>{t("clear")}</p>
        </button>
      </div>
      {/* a list of check boxes with a title, checkboxes should be in new lines*/}

      {/* Categories */}
      <div className="mt-8">
        <h2 className="text-[#607e8ff9] text-base font-medium">{t("Categories")}</h2>
        <div className="my-3 flex items-center">
          {radioButtonsSelector(categories, categoriesOptions, (e) =>
            setcategories(e.target.value)
          )}
        </div>
      </div>

      {/* Days */}
      <div className="mt-8">
        <h2 className="text-[#607e8ff9] text-base font-medium">{t("jours")}</h2>
        <div className="my-3 flex items-center">
          {radioButtonsSelector(days, daysOptions, (e) =>
            setdays(e.target.value)
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="mt-8">
        <h2 className="text-[#607e8ff9] text-base font-medium">{t("note")}</h2>
        <div className="my-3 flex items-center">
          {radioButtonsSelector(rating, ratingOptions, (e) =>
            setRating(e.target.value)
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

const radioButtonsSelector = (value, options, onChange) => {
  return (
    <div className="flex flex-col gap-2 items-start ">
      {options.map((option) => (
        <div key={option} className="flex flex-row gap-2 items-center">
          <input
            type="radio"
            id={option}
            name={option}
            value={option}
            checked={value === option}
            onChange={onChange}
            className="me-2 w-4 h-4 accent-[#094B72]"
          />
          <label htmlFor={option} className="text-base select-none">
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

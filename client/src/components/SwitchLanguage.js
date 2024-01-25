import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const SwitchLanguage = () => {
  const { t } = useTranslation();
  const languageCode = t("languageCode");
  const isArabic = languageCode === "ar";

  const switchToArabic = () => {
    i18n.changeLanguage("ar");
  };

  const switchToFrench = () => {
    i18n.changeLanguage("fr");
  };

  return (
    <div className="flex flex-row border-2 border-[#d3e3ed] rounded-full">
      <div
        className={`flex items-center justify-center cursor-pointer py-1 px-4 rounded-s-full hover:bg-[#cfe5f4] transition-all duration-200 ${
          isArabic ? "bg-[#ffffff]" : "bg-[#deedf7]"
        }`}
        onClick={switchToFrench}
      >
        <p
          className={`text-[#26495D] ${
            isArabic ? "opacity-60" : "opacity-100"
          } text-xs`}
        >
          {"Français"}
        </p>
      </div>
      <div
        className={`flex items-center justify-center cursor-pointer py-1 px-2 rounded-e-full hover:bg-[#cfe5f4] transition-all duration-200 ${
          isArabic ? "bg-[#deedf7]" : "bg-[#ffffff]"
        }`}
        onClick={switchToArabic}
      >
        <p
          className={`text-[#26495D] ${
            isArabic ? "opacity-100" : "opacity-60"
          } text-xs ar`}
        >
          {"العربية"}
        </p>
      </div>
    </div>
  );
};

export default SwitchLanguage;

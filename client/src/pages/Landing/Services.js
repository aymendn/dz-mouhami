import Card from "../../components/Card";
import logo1 from "../../assets/search_services.svg";
import logo2 from "../../assets/verified.svg";
import logo3 from "../../assets/chat.svg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const dataItems = [
    {
      title: t("advancedSearch"),
      text: t("advancedSearchSubtitle"),
      Logo: logo1,
    },
    {
      title: t("verifiedProfessionals"),
      text: t("verifiedProfessionalsSubtitle"),
      Logo: logo2,
    },
    {
      title: t("seamlessExperience"),
      text: t("seamlessExperienceSubtitle"),
      Logo: logo3,
    },
  ];
  return (
    <div className="bg-[#ECF3F8] px-4 py-16 w-full">
      <div className="mb-8 text-center max-w-lg mx-auto">
        <h1 className="text-center text-4xl lg:text-5xl font-['Domine'] font-semibold text-[#0f3146]">
          {t("ourServices")}
        </h1>
        <p className="p-4  text-[#496C80] text-md ">
          {t("ourServicesSubtitle")}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
        {/* im gonna render card for each item  */}
        {dataItems.map((data, index) => (
          <Card
            key={index}
            Logo={data.Logo}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

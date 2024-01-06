import Card from "../../components/Card";
import logo1 from "../../assets/search_services.svg";
import logo2 from "../../assets/verified.svg";
import logo3 from "../../assets/chat.svg";

const Services = () => {
  const dataItems = [
    {
      title: "Advanced Research",
      text: "Environmental legal issues might occur since the planned business activities are designed.",
      Logo: logo1,
    },
    {
      title: "Verified Profiles",
      text: "Environmental legal issues might occur since the planned business activities are designed",
      Logo: logo2,
    },
    {
      title: "Seamless Experience",
      text: "Environmental legal issues might occur since the planned business activities are designed",
      Logo: logo3,
    },
  ];
  return (
    <div className="bg-[#ECF3F8] px-4 py-16 w-full">
      <div className="mb-8 text-center max-w-lg mx-auto">
        <h1 className="text-center text-5xl font-['Lexend_Exa'] font-semibold -tracking-[0.30rem]  text-[#0f3146]">
          Our Services
        </h1>
        <p className="p-4  text-[#496C80] text-md ">
          Environmental legal issues might occur since the planned business
          activities are designed
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mx-16 md:grid md:grid-cols-2 lg:flex lg:justify-evenly ">
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

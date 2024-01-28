import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import validation1 from "../../assets/hourglass.svg";
import validation from "../../assets/home.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SuccessLawyerPage = () => {
  const {t} = useTranslation()
  return (
    <div className="flex flex-col justify-between items-stretch min-h-screen w-full ">
      <Navbar />
      <div className="mt-8 py-4 mx-auto w-1/2 text-center">
        <img src={validation1} alt="validation" className="w-16 mx-auto" />
        <h1 className="p-4 text-[#0F3146] text-4xl font-semibold">
          {t("pending")}
        </h1>
        <p className="p-4 text-[#496C80] text-base font-medium">
          {t("approval")}
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <Link to="/">
          <button className="transition-all hover:opacity-90 border-1 bg-[#094B72] py-3 px-6 rounded-3xl text-white font-normal text-md flex gap-2 ">
            <img src={validation} alt="Validation" />
            Home Page
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessLawyerPage;

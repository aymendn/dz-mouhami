import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import personSearch from "../../assets/person_search.svg";
import personCheck from "../../assets/person_check_blue.svg";
import SvgColor from "react-svg-color";
import { Link } from "react-router-dom";

const SucceessUserPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main>
        <div className="mt-8 py-4 mx-auto w-1/2 text-center">
          <img
            src={personCheck}
            alt="Success Validation"
            className="w-16 mx-auto"
          />
          <h1 className="p-4 text-[#0F3146] text-4xl font-semibold">
            Account Created Successfully!
          </h1>
          <p className="p-4 text-[#496C80] text-base font-medium">
            Thank you for joining DZ-Mouhami! Your account has been successfully
            created. You are now part of our community dedicated to connecting
            users with trusted lawyers in Algeria.
          </p>
        </div>
        <Link to="/search">
          <div className="flex justify-center m-4 mb-16">
            <button className="transition-all hover:opacity-90 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2 ">
              <div className="max-w-[20px]">
                <SvgColor svg={personSearch} colors={["#FFF", "#FFF"]} />
              </div>
              Explore Lawyers
            </button>
          </div>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default SucceessUserPage;

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import balance from "../../assets/balance.svg";
import search from "../../assets/person_search.svg";
import { Link } from "react-router-dom";
const ChoicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 text-center">
        <h1 className="text-[#0F3146] text-5xl font-semibold font-['Lexend_Exa'] -tracking-[0.42rem]">
          Choose your role
        </h1>
        <p className="p-4 text-[#496C80] text-md">
          Let's tailor your experience.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center py-12 gap-8 sm:gap-12">
        <div className="flex flex-col justify-center transform  transition-all duration-200 ease-in-out bg-[#FFFBF1] hover:bg-[#FFF4D9] border-2 hover:border-[#FFC63E] w-full max-w-xs  h-[400px] rounded-2xl hover:shadow-sm  text-center px-4 py-4">
          <img className="mx-auto w-16 py-4" src={balance} alt="Balance Icon" />
          <h1 className="text-[#094B72] font-medium text-3xl py-4">
            I am a Lawyer
          </h1>
          <p className="py-4 text-[#496C80] text-md">
            Join our legal community to showcase your expertise and connect with
            clients.
          </p>
          <Link to="/lawyer-registrationStep1">
            <button className="transition-all my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white  py-2 px-12 rounded-full text-[#094B72] font-medium ">
              Select
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center transform  transition-all duration-200 ease-in-out bg-[#FFFBF1] hover:bg-[#FFF4D9] border-2 hover:border-[#FFC63E] w-full max-w-xs  h-[400px] rounded-2xl hover:shadow-sm  text-center px-4 py-4">
          <img className="mx-auto w-16 py-4" src={search} alt="Search Icon" />
          <h1 className="text-[#094B72] font-medium text-3xl py-2">
            Seeking Legal Assistance
          </h1>
          <p className="py-4 text-[#496C80] text-md">
            Find trusted lawyers in Algeria. Let us guide you.
          </p>
          <Link to="/user-registration">
            <button className="transition-all my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white  py-2 px-12 rounded-full text-[#094B72] font-medium ">
              Select
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-12 text-center">
        <p className="p-2 text-[#496C80] text-md">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ChoicePage;

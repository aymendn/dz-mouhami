import React from "react";
import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import balance from "../../assets/balance.svg";
import search from "../../assets/person_search.svg";
import { Link } from "react-router-dom";
const ChoicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 text-center">
        <h1 className="text-[#0F3146] text-5xl font-semibold">
          Choose your role
        </h1>
        <p className="p-4 text-[#496C80] text-md">
          Let's tailor your experience.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center py-12 gap-8 sm:gap-12">
        <div className="transform hover:scale-110 transition duration-300 ease-in-out p-8 bg-[#FFFBF1] hover:bg-[#FFF4D9] hover:border-[1.5px] hover:border-[#FFC63E] w-full sm:w-64 h-96 rounded-2xl hover:shadow-sm hover:duration-500 text-center p-4">
          <img className="mx-auto w-16 py-4" src={balance} alt="Balance Icon" />
          <h1 className="text-[#094B72] font-medium text-3xl py-4">
            I am a Lawyer
          </h1>
          <p className="py-4 text-[#496C80] text-md">
            Join our legal community to showcase your expertise and connect with
            clients.
          </p>
          <Link to="/LawyerRegistrationStep1">
            <button className="my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm">
              Select
            </button>
          </Link>
        </div>

        <div className="transform hover:scale-110 transition duration-300 ease-in-out p-8 bg-[#FFFBF1] hover:bg-[#FFF4D9] hover:border-[1.5px] hover:border-[#FFC63E] w-full sm:w-64 h-96 rounded-2xl hover:shadow-sm hover:duration-500 text-center">
          <img className="mx-auto w-16 py-4" src={search} alt="Search Icon" />
          <h1 className="text-[#094B72] font-medium text-3xl py-2">
            Seeking Legal Assistance
          </h1>
          <p className="py-4 text-[#496C80] text-md">
            Find trusted lawyers in Algeria. Let us guide you.
          </p>
          <Link to="/UserRegistration">
            <button className="my-2 border-2 border-[#094B72] hover:bg-[#094B72] hover:text-white hover:duration-500 py-2 px-12 rounded-2xl text-[#094B72] font-medium text-sm">
              Select
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-12 text-center">
        {/* <button className="transition-transform transform hover:scale-105 duration-500 border-1 bg-[#094B72] py-2 px-12 rounded-3xl text-white font-normal text-sm">Continue</button> */}
        <p className="p-2 text-[#496C80] text-md">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default ChoicePage;

import Navbar from "./NavbarNoAction";
import Footer from "./Footer";
import validation1 from "./Assets/hourglass.png";
import validation from "./Assets/home.png";

const SuccessLawyer = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 py-4 mx-auto w-1/2 text-center">
        <img src={validation1} alt="validation" className="w-16 mx-auto" />
        <h1 className="p-4 text-[#0F3146] text-4xl font-semibold">
          Account Pending Approval!
        </h1>
        <p className="p-4 text-[#496C80] text-base font-medium">
          Thank you for registering with DZ-Mouhami! We're currently reviewing
          your account information to ensure the highest quality of legal
          professionals on our platform. Your account is currently pending
          approval.
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <button className="transition-transform transform hover:scale-105 duration-500 border-1 bg-[#094B72] py-3 px-6 rounded-3xl text-white font-normal text-md flex gap-2 hover:bg-blue-100 hover:text-[#094B72] hover:duration-500 hover:shadow-md focus:outline-none">
          <img src={validation} alt="Validation" />
          Home Page
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SuccessLawyer;

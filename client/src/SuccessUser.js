import Navbar from "./NavbarNoAction";
import Footer from "./Footer";
import validation from "./Assets/person_search (1).png";
import validation1 from "./Assets/person_check (1).png";

const SucceessUser = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8 py-4 mx-auto w-1/2 text-center">
        <img src={validation1} alt="Success Validation" className="w-16 mx-auto" />
        <h1 className="p-4 text-[#0F3146] text-4xl font-semibold">
          Account Created Successfully!
        </h1>
        <p className="p-4 text-[#496C80] text-base font-medium">
          Thank you for joining DZ-Mouhami! Your account has been successfully
          created. You are now part of our community dedicated to connecting
          users with trusted lawyers in Algeria.
        </p>
      </div>
      <div className="flex justify-center m-4 mb-16">
        <button className="transition-transform transform hover:scale-105 duration-500 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2 hover:bg-blue-100 hover:text-[#094B72] hover:duration-500 hover:shadow-md focus:outline-none">
          <img src={validation} alt="Validation" />
          Explore Lawyers
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default SucceessUser;

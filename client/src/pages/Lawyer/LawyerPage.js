import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MainInfo from "./MainInfo";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Address from "./Address";

const LawyerPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen max-w-[70rem] mx-2 md:mx-6 mb-12 mt-6 gap-6 ">
        {/* main (2/3) */}
        <div className="w-full md:w-2/3 h-full flex flex-col gap-6">
          {/* Main info */}
          <div className="rounded-2xl border-2 border-slate-100 p-8">
            <MainInfo />
          </div>

          {/* Reviews */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Reviews />
          </div>
        </div>
        {/* sidebar (1/3) */}
        <div className="w-full md:w-1/3 h-full flex flex-col gap-6">
          {/* Contact */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Contact />
          </div>

          {/* Address */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Address />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LawyerPage;

import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import MainInfo from "./MainInfo";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Address from "./Address";

const LawyerPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen max-w-7xl mx-auto mb-12 gap-6 width70 ">
        {/* main (2/3) */}
        <div className="w-2/3 h-full flex flex-col gap-6">
          {/* Main info */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <MainInfo />
          </div>

          {/* Reviews */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Reviews />
          </div>
        </div>
        {/* sidebar (1/3) */}
        <div className="w-1/3 h-full flex flex-col gap-6">
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
      <Footer />
    </>
  );
};

export default LawyerPage;

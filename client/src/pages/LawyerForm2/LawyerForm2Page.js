import Footer from "../../components/Footer";
import Navbar from "../../components/NavbarNoAction";
import { Stepper } from "react-form-stepper";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
const LawyerForm2Page = () => {
  const styleConfig = {
    activeBgColor: "#007BFF", // Bleu vif pour les étapes actives
    completedBgColor: "#4682B4", // Bleu acier pour les étapes complétées
    inactiveBgColor: "#B0C4DE", // Bleu clair pour les étapes inactives
  };
  const connectorStyleConfig = {
    size: "2px", // Épaisseur du connecteur
    activeColor: "#007BFF", // Couleur du connecteur pour les étapes actives
    completedColor: "#4682B4", // Couleur du connecteur pour les étapes complétées
    disabledColor: "#B0C4DE", // Couleur du connecteur pour les étapes inactives
  };
  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <div className="flex items-center ">
        <Stepper
          steps={[{ label: "Step 1" }, { label: "Step 2" }]}
          activeStep={2}
          styleConfig={styleConfig}
          connectorStyleConfig={connectorStyleConfig}
        />
      </div>
      <div className="mt-8  text-center ">
        <h1 className="text-[#0F3146] text-5xl font-semibold">
          Submit Essentials Documents
        </h1>
        <p className="p-4 text-[#496C80] text-md text-center ">
          Upload required documents to showcase your legal expertise and foster
          trust with potential clients on DZ-Mouhami.
        </p>
      </div>

      <form class="my-8  mx-16 lg:mx-64 flex items-center space-x-6">
        <label htmlFor="Lawfirm" className="block ">
          <h1 className="text-[#15394E] text-lg font-medium">
            Professional License
          </h1>
          <p className="text-sm font-normal text-[#103F5BE5]">
            Demonstrate your official authorization to practice law.
          </p>
        </label>
        <label class="block">
          <input
            type="file"
            className="block text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px] file:border-0
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "
          />
        </label>
      </form>
      <form class="my-8 mx-16 lg:mx-64 flex items-center space-x-6">
        <label htmlFor="Lawfirm" className="block ">
          <h1 className="text-[#15394E] text-lg font-medium">
            Photo Identification
          </h1>
          <p className="text-sm font-normal text-[#103F5BE5]">
            Provide a clear photo ID to build transparency and surely<br></br>
            trust with potential clients.
          </p>
        </label>
        <label class="block">
          <input
            type="file"
            className="block text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px] file:border-0
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "
          />
        </label>
      </form>
      <div className="flex justify-end m-4">
        <Link to="/lawyer-registrationStep2/validation">
          <button className="mb-10 transition-all hover:opacity-90   mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
            <img src={validation} alt="Validation" />
            Continue
          </button>
        </Link>
      </div>

      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LawyerForm2Page;

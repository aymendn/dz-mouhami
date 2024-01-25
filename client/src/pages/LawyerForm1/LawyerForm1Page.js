import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Stepper } from "react-form-stepper";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";

const LawyerForm1Page = () => {
  const styleConfig = {
    activeBgColor: "#007BFF", // Bleu vif pour les étapes actives
    completedBgColor: "#4682B4", // Bleu acier pour les étapes complétées
    inactiveBgColor: "#ffffff", // Bleu clair pour les étapes inactives
  };
  const connectorStyleConfig = {
    size: "2px", // Épaisseur du connecteur
    activeColor: "#007BFF", // Couleur du connecteur pour les étapes actives
    completedColor: "#4682B4", // Couleur du connecteur pour les étapes complétées
    disabledColor: "#B0C4DE", // Couleur du connecteur pour les étapes inactives
  };
  const options = [
    { label: "Divorce", value: "Option 1" },
    { label: "Usurpation", value: "Option 2" },
    { label: "Vols", value: "Option 3" },
    { label: "Detournement", value: "Option 3" },
    { label: "Blanchissement", value: "Option 3" },
  ];
  const options1 = [
    { label: "Anglais", value: "Option 1" },
    { label: "Francais", value: "Option 2" },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center mt-4 ">
        <Stepper
          steps={[{ label: "Step 1" }, { label: "Step 2" }]}
          activeStep={2}
          styleConfig={styleConfig}
          connectorStyleConfig={connectorStyleConfig}
        />

        <div className="mt-8 text-center">
          <h1 className="text-[#0F3146] text-5xl font-semibold">
            Lawyer Registration
          </h1>

          <p className="p-4 text-[#496C80] text-md text-center">
            Welcome, legal professional! We're excited to have you join our
            community. Please provide the following information to create your
            lawyer profile.
          </p>
        </div>

        <form className="min-w-full sm:min-w-[600px] max-w-3xl w-full px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <TextField id={"name"} label={"Name"} placeholder={"John"} />

            <TextField id={"surname"} label={"Surname"} placeholder={"Doe"} />

            <TextField
              id={"email"}
              label={"Email"}
              placeholder={"a@mail.com"}
            />

            <TextField
              id={"phone"}
              label={"Phone"}
              placeholder={"06 00 00 00 00"}
            />

            <SelectField
              id={"Specification"}
              label={"Legal Specification"}
              placeholder={"Select a specification"}
              options={[
                { value: "Agression", label: "Agression" },
                { value: "Crime", label: "Crime" },
                { value: "Robbing", label: "Robbing" },
              ]}
            />

            <TextField id={"address"} label={"Address"} placeholder={"Paris"} />
          </div>

          <div className="flex justify-end m-4">
            <Link to="/lawyer-registrationStep2">
              <button className="flex flex-row gap-2 transition-all border-1 bg-[#094B72] py-3 px-10 rounded-full text-white font-normal text-md hover:opacity-90 mb-6">
                <img src={validation} alt="Validation" />
                Continue
              </button>
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LawyerForm1Page;

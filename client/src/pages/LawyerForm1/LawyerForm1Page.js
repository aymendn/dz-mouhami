import React from "react";
import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Stepper } from 'react-form-stepper';
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
const LawyerForm1Page = () => {

  const styleConfig = {
      activeBgColor: '#007BFF', // Bleu vif pour les étapes actives
      completedBgColor: '#4682B4', // Bleu acier pour les étapes complétées
      inactiveBgColor: '#B0C4DE' // Bleu clair pour les étapes inactives
  };
  const connectorStyleConfig = {
    size: '2px', // Épaisseur du connecteur
    activeColor: '#007BFF', // Couleur du connecteur pour les étapes actives
    completedColor: '#4682B4', // Couleur du connecteur pour les étapes complétées
    disabledColor: '#B0C4DE' // Couleur du connecteur pour les étapes inactives
    
  };
  const options = [
    { label: 'Divorce', value: 'Option 1' },
    { label: 'Usurpation', value: 'Option 2' },
    { label: 'Vols', value: 'Option 3' },
    { label: 'Detournement', value: 'Option 3' },
    { label: 'Blanchissement', value: 'Option 3' },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center gap-4 my-8">

        <div className="mt-4 text-center">
          <h1 className="text-[#0F3146] text-5xl font-semibold">
            Lawyer Registration
          </h1>

          <p className="p-4 text-[#496C80] text-md text-center">
            Welcome, legal professional! We're excited to have you join our
            community. Please provide the following information to create your
            lawyer profile.
          </p>
        </div>

        <div className="flex items-center ">
        <Stepper
        steps={[{ label: 'Step 1' }, { label: 'Step 2' }]}
        activeStep={1}
        styleConfig={styleConfig}
        connectorStyleConfig={connectorStyleConfig}
      />


        </div> 
        <form className="mx-4 md:mx-16 lg:mx-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 ">
          <div className=" mb-4 mx-6 mx-6">
         <TextField
        label="Nom"
        type="text"
        id="nom"
        placeholder="Doe"/>
        </div>
        
        <div className=" mb-4 mx-6">
         <TextField
        label="surname"
        type="text"
        id="surname"
        placeholder="John"/>
        </div>
          

        <div className=" mb-4 mx-6">
         <TextField
        label="email"
        type="email"
        id="email"
        placeholder="Johndoe@gmail.dz"/>
        </div>

        <div className=" mb-4 mx-6">
         <TextField
        label="contact"
        type="tel"
        id="contact"
        placeholder="555-222-111"/>
        </div>

            

            <div className=" mb-4 mx-6">
            <SelectField
        label="Categorie"
        placeholder="Crime"
        id="selectOption"
        options={options}
        />
            </div>


            <div className=" mb-4 mx-6">
         <TextField
        label="Lawfirm"
        type="text"
        id="Lawfirm"
        />
        </div>

          </div>

          <div className="flex justify-end m-4">
            <Link to="/lawyer-registrationStep2">
              <button className="transition-transform transform hover:scale-105 duration-500 mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
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

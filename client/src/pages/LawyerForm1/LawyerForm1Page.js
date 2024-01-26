import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Stepper } from "react-form-stepper";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import textAreaField from  "../../components/TextAreaField"
import TextAreaField from "../../components/TextAreaField";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
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

  const [data, setData] = useState(
    {
     
     specialization:"",
     phone_number:null,
     bio:"",
     language:"",
     street:"",
     city:"",
     state:"",
     zip_code:null,
     country:"",
    }
   );

   const handleChange = (e) =>{

    setData(prev=>({...prev,[e.target.name]: e.target.value}))
   
} 
   const Navigate = useNavigate()
   const handleSubmit =  (e) => {
    e.preventDefault();
    
   const token = "533ba7c8dccd71003fedea92076ab3ef94aaa243"
   console.log("Data to be sent:", { ...data, token: token });
    axios.post('http://127.0.0.1:8000/core/lawyers/', {token:token,     
    specialization:data.specialization,
     phone_number:data.phone_number,
     bio:data.bio,
     language:data.language,
    phone_number:data.phone_number,
    address:{
      street:data.street,
      city:data.city,
      state:data.state,
      zip_code:data.zip_code,
      country:data.country,
    }
})
      .then(response => {
        //Handle the response data as needed
        console.log(response.data);
        Navigate(`/lawyer-registrationStep2`);
      })
      .catch(error => {
        //Handle errors
        console.error('Error:', error);
      });
  };
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
           

            <TextField
              id={"phone_number"}
              name={"phone_number"}
              label={"phone number"}
              placeholder={"555-222-333"}
              onChange={handleChange}
            />


            <TextField 
            id={"street"}  
            label={"street"}
            name={"street"} 
            onChange={handleChange}
             />
            <SelectField
              id={"specialization"}
              name={"specialization"}
              label={"Legal specialization"}
              placeholder={"Select a specialization"}
              options={[
                { value: "Agression", label: "Agression" },
                { value: "Crime", label: "Crime" },
                { value: "Robbing", label: "Robbing" },
              ]}
              onChange={handleChange}
            />
            <TextField 
            id={"city"}  
            label={"city"}
            name={"city"} 
            onChange={handleChange} 
             />
            <TextField 
            id={"state"}  
            label={"state"}
            name={"state"} 
            onChange={handleChange}
             />

            <TextField 
            id={"country"}  
            label={"country"}
            name={"country"}  
            onChange={handleChange}
             />

          <TextField 
            id={"zip_code"}  
            label={"zip code"}
            name={"zip_code"}  
            type={"number"}
            onChange={handleChange}
             />
            <TextAreaField
            id={"bio"}  
            label={"bio"}
            name={"bio"}
            onChange={handleChange}
            />
          </div>

          <div className="flex justify-end m-4">
            
              <button onClick={handleSubmit} className="flex flex-row gap-2 transition-all border-1 bg-[#094B72] py-3 px-10 rounded-full text-white font-normal text-md hover:opacity-90 mb-6">
                <img src={validation} alt="Validation" />
                Continue
              </button>
            
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LawyerForm1Page;

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import axios from 'axios';

const UserFormPage = () => {
  const [data, setData] = useState(
   {
    age: null,
    gender:"",
    phone_number:null,
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
  const handleSubmit =  (e) => {
    e.preventDefault();
   //http://127.0.0.1:8000/core/clients/
   const token = "fa5b5b71139ace340120b57070f14a5429764199"
    axios.post('http://localhost:8000/core/clients/', {...data,"token":token})
      .then(response => {
        //Handle the response data as needed
        console.log(response.data);
      })
      .catch(error => {
        //Handle errors
        console.error('Error:', error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="mt-8 text-center max-w-3xl">
        <h1 className="text-[#0F3146] text-4xl font-semibold">
          Create Your Account
        </h1>
        <p className="p-4 text-[#496C80] text-md text-center">
          Welcome to DZ-Mouhami! By creating an account, you'll gain access to a
          network of trusted lawyers in Algeria. Please fill out the form below
          to get started.
        </p>
      </div>

      <form className="min-w-full sm:min-w-[600px] max-w-3xl w-full px-2"  >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <TextField id={"age"} 
          name={"age"} 
          label={"age"} 
          type={"number"}
          placeholder={"45"} 
           onChange={handleChange}/>
             
          <SelectField
              id={"gender"}
              label={"gender"}
              placeholder={"gender"}
              type={"text"}
              options={[
                { value: "F", label: "F" },
                { value: "M", label: "M" },
              ]}
              onChange={handleChange}
            />
            <TextField id={"phone"} name={"phone_number"} label={"Phone"} type={"number"} placeholder={"06 00 00 00 00"} onChange={handleChange}/>


          <TextField id={"street"} type={"text"} name={"street"} label={"street"}  onChange={handleChange}/>

          <TextField id={"city"} type={"text"} name={"city"} label={"city"} placeholder={"Paris"} onChange={handleChange}/>

          <TextField id={"state"} type={"text"} name={"state"} label={"state"}  onChange={handleChange}/>

          <TextField id={"zip_code"} type={"text"} name={"zip_code"} label={"zip code"}  onChange={handleChange}/>

          <TextField id={"country"} type={"text"} name={"country"} label={"country"}  onChange={handleChange}/>
        </div>

       

        <div className="flex justify-end m-4">
          <Link to="/user-registration/validation">
            <button
              type="submit"
             onClick={handleSubmit}
              className="flex flex-row gap-2 transition-all border-1 bg-[#094B72] py-3 px-10 rounded-full text-white font-normal text-md hover:opacity-90 mb-6"
            >
              <img src={validation} alt="Validation" />
              Continue
            </button>
          </Link>
        </div>
      </form>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserFormPage;

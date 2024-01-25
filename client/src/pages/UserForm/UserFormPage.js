import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import axios from 'axios';

const UserFormPage = () => {
  const [data, setData] = useState(
   {
    
    phone_number: null 
   }
  );
  const [error, setError] = useState(null);


  const handleChange = (e) =>{

    setData(prev=>({...prev,[e.target.name]: e.target.value}))
   
} 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/core/clients/' , data);
      setData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Erreur de requête:', error);
      setError('Error submitting the form. Please try again.');
    }
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
          <TextField id={"name"} name={"name"} label={"Name"} placeholder={"John"}  onChange={handleChange}/>
          <TextField id={"surname"} name={"surname"} label={"Surname"} placeholder={"Doe"} onChange={handleChange}/>
          <TextField id={"email"} name={"email"} label={"Email"} placeholder={"a@mail.com"} onChange={handleChange}/>
          <TextField id={"phone"} name={"phone"} label={"Phone"} placeholder={"06 00 00 00 00"} onChange={handleChange}/>
          <TextField id={"address"} label={"Address"} placeholder={"Paris"} onChange={handleChange}/>
        </div>

        {error && <p className="text-red-500">{error}</p>}

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

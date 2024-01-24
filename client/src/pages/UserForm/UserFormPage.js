import React from "react";
import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import TextAreaField from "../../components/TextAreaField";
import TextField from "../../components/TextField";
const UserFormPage = () => {
  return (
    <div>
      <Navbar />

      <div className="mt-8 text-center">
        <h1 className="text-[#0F3146] text-5xl font-semibold">
          Create Your Account
        </h1>
        <p className="p-4 text-[#496C80] text-md text-center">
          Welcome to DZ-Mouhami! By creating an account, you'll gain access to a
          network of trusted lawyers in Algeria. Please fill out the form below
          to get started.
        </p>
      </div>

      <form className="mx-6 md:mx-16 lg:mx-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-8">
        <div className="mb-4">
         <TextField
        label="Nom"
        type="text"
        id="nom"
        placeholder="Doe"/>
        </div>
        
        <div className="mb-4">
         <TextField
        label="surname"
        type="text"
        id="surname"
        placeholder="John"/>
        </div>
          

        <div className="mb-4">
         <TextField
        label="email"
        type="email"
        id="email"
        placeholder="Johndoe@gmail.dz"/>
        </div>

        <div className="mb-4">
         <TextField
        label="contact"
        type="tel"
        id="contact"
        placeholder="555-222-111"/>
        </div>

       </div>
        <div className="flex justify-center md:justify-end m-4">
          <Link to="/user-registration/validation">
            <button className="transition-transform transform hover:scale-90 duration-300 border bg-[#094B72] py-3 px-6 rounded-3xl text-white font-normal text-md flex  gap-2">
              <img src={validation} alt="Validation" />
              Create account
            </button>
          </Link>
        </div>
        
      </form>

      <Footer />
    </div>
  );
};

export default UserFormPage;

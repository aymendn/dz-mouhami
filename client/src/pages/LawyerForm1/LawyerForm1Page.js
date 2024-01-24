import React from "react";
import Navbar from "../../components/NavbarNoAction";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";

const LawyerForm1Page = () => {
  return (
    <div>
      <Navbar />

      <div className="flex  flex-col items-center   ">
        <div className="hidden sm:flex items-center gap-2">
          <Link to="/lawyer-registrationStep1">
            <button className=" text-[#094B72] text-normal font-medium rounded-full border-2 border-[#094b722b] bg-[#FFC12CAD] px-4  py-3 transition-all">
              <p className=" text-xs opacity-60">First step</p>
              <p className=" text-sm">Fill information form</p>
            </button>
          </Link>
          <p className="font-medium text-2xl text-[#094B72] mx-2 my-8">{">"}</p>
          <Link to="/lawyer-registrationStep2">
            <button className=" text-[#094B72] text-normal font-medium rounded-full border-2 border-[#094b722b] hover:bg-[#FFC12CAD] hover:shadow-md hover:border-[#634f20ad] px-4   py-3 transition-all">
              <p className=" text-xs opacity-60">Second step</p>
              <p className=" text-sm">Upload Files</p>
            </button>
          </Link>
        </div>

        <div className="mt-8 text-center  max-w-2xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 ">
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

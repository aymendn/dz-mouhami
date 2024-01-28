import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { RegistrationFormStepper } from "../../components/Stepper";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import TextAreaField from "../../components/TextAreaField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../utils/UseTokenHook";
import { useAtom } from "jotai";
import { userJsonAtom } from "../../utils/Auth";
import { useTranslation } from "react-i18next";
const LawyerForm1Page = () => {
  const {t} = useTranslation()
  const [data, setData] = useState({
    specialization: "",
    phone_number: null,
    bio: "",
    language: "",
    street: "",
    city: "",
    state: "",
    zip_code: null,
    country: "",
  });

  const token = useToken();
  const [userJson, setUserJson] = useAtom(userJsonAtom);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("Data to be sent:", { ...data, token: token });
      const response = await axios("/core/lawyers/", {
        method: "post",
        data: {
          specialization: data.specialization,
          phone_number: data.phone_number,
          bio: data.bio,
          language: data.language,
          phone_number: data.phone_number,
          address: {
            street: data.street,
            city: data.city,
            state: data.state,
            zip_code: data.zip_code,
            country: data.country,
          },
        },
        headers: {
          Authorization: token,
        },
      });

      console.log(response.data);

      // set the user to be a lawyer in local storage
      const user = JSON.parse(userJson);
      const newUser = { ...user, isLawyer: true };
      setUserJson(JSON.stringify(newUser));

      Navigate(`/lawyer-registrationStep2`);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="max-h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-4 ">
        <RegistrationFormStepper activeStep={1} />
        <div className="mt-8 text-center">
          <h1 className="text-[#0F3146] text-5xl font-semibold">
            {t("inscriptionavocat")}
          </h1>

          <p className="p-4 text-[#496C80] text-md text-center">
            {t("welcomelawyers")}
          </p>
        </div>

        <form className="min-w-full sm:min-w-[600px] max-w-3xl w-full px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <TextField
              id={"language"}
              name={"language"}
              label={"language"}
              placeholder={"Français, Anglais, Espagnol, ..."}
              onChange={handleChange}
            />
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
              label={t("country")}
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
            <button
              onClick={handleSubmit}
              className="flex flex-row gap-2 transition-all border-1 bg-[#094B72] py-3 px-10 rounded-full text-white font-normal text-md hover:opacity-90 mb-6"
            >
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

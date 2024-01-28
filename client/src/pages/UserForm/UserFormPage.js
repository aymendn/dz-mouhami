import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useToken } from "../../utils/UseTokenHook";
import { toast } from "react-toastify";
import LoadingOverlay from "../../components/LoadingOverlay";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userJsonAtom } from "../../utils/Auth";

const UserFormPage = () => {
  const token = useToken();
  const [userJson, setUserJson] = useAtom(userJsonAtom);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    age: null,
    gender: "",
    phone_number: null,
    street: "",
    city: "",
    state: "",
    zip_code: null,
    country: "",
  });
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data to be sent:", data);
    setIsLoading(true);
    axios
      .post(
        "/core/clients/",
        {
          age: data.age,
          gender: data.gender,
          phone_number: data.phone_number,
          address: {
            street: data.street,
            city: data.city,
            state: data.state,
            zip_code: data.zip_code,
            country: data.country,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        //Handle the response data as needed
        console.log(response.data);
        toast.success("Votre compte a été créé avec succès");

        // set the user to be a client in local storage
        const user = JSON.parse(userJson);
        const newUser = { ...user, isClient: true };
        setUserJson(JSON.stringify(newUser));

        navigate("/user-registration/validation");
      })
      .catch((error) => {
        //Handle errors
        console.error("Error:", error);
        toast.error("Erreur lors de la création du compte");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="mt-8 text-center max-w-3xl">
        <h1 className="text-[#0F3146] text-4xl font-semibold">
          {t("createYourAccount")}
        </h1>
        <p className="p-4 text-[#496C80] text-md text-center">
          {t("createYourAccountSubtitle")}
        </p>
      </div>

      <LoadingOverlay isLoading={isLoading}>
        <form className="min-w-full sm:min-w-[600px] max-w-3xl w-full px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <TextField
              id={"age"}
              name={"age"}
              label={"Age"}
              type={"number"}
              placeholder={"45"}
              onChange={handleChange}
            />
            <SelectField
              id={"gender"}
              label={"Sexe"}
              placeholder={"Sexe"}
              type={"text"}
              options={[
                { value: "F", label: "F" },
                { value: "M", label: "M" },
              ]}
              onChange={handleChange}
            />
            <TextField
              id={"phone"}
              name={"phone_number"}
              label={"Numero Telephone"}
              type={"number"}
              placeholder={"06 00 00 00 00"}
              onChange={handleChange}
            />

            <TextField
              id={"street"}
              type={"text"}
              name={"street"}
              label={"Rue"}
              onChange={handleChange}
            />

            <TextField
              id={"city"}
              type={"text"}
              name={"city"}
              label={"Ville"}
              placeholder={"Paris"}
              onChange={handleChange}
            />

            <TextField
              id={"state"}
              type={"text"}
              name={"state"}
              label={"Wilaya"}
              onChange={handleChange}
            />

            <TextField
              id={"zip_code"}
              type={"text"}
              name={"zip_code"}
              label={"Code Postal"}
              onChange={handleChange}
            />

            <TextField
              id={"country"}
              type={"text"}
              name={"country"}
              label={"Pays"}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end m-4">
            <Link to="/user-registration/validation">
              <button
                onClick={handleSubmit}
                className="flex flex-row gap-2 transition-all border-1 bg-[#094B72] py-3 px-10 rounded-full text-white font-normal text-md hover:opacity-90 mb-6"
              >
                <img src={validation} alt="Validation" />
                Continue
              </button>
            </Link>
          </div>
        </form>
      </LoadingOverlay>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default UserFormPage;

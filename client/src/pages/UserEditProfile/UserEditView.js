import { useState } from "react";
import profileIcon from "../../assets/profile.svg";
import TextField from "../../components/TextField";
import SelectField from "../../components/SelectField";
import { useTranslation } from "react-i18next";
import TextAreaField from "../../components/TextAreaField";
import axios from "axios";
import { useToken } from "../../utils/UseTokenHook";

const UserEditView = () => {
  const { t } = useTranslation();
  const token = useToken();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    document.getElementById("imageInput").click();
  };
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

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    console.log("Data to be updated:", { ...data, token: token });
    e.preventDefault();
    await axios
      .put(
        `/core/lawyers/2/`,
        data,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur :", error);
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex items-center gap-4">
        <img src={profileIcon} alt="Edit Profile" className="w-8 h-8" />
        <h1 className="text-3xl  font-semibold text-[#094B72]">
          {t("editProfile")}
        </h1>
      </div>
      <label
        htmlFor="imageInput"
        className="block text-md m-6 font-medium text-[#094B72] "
      >
        {t("changePicture")}
      </label>
      <div className="mt-1 flex items-center">
        <input
          type="file"
          accept="image/*"
          id="imageInput"
          onChange={handleImageChange}
          className="hidden"
        />
        <div
          onClick={handleImageClick}
          className="cursor-pointer bg-cover bg-center border border-gray-300 rounded-full w-32 h-32 mx-8"
          style={{
            backgroundImage: selectedImage
              ? `url(${URL.createObjectURL(selectedImage)})`
              : "url(https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg)",
          }}
        ></div>
        {selectedImage && (
          <div className="ms-3">
            <p className="text-sm text-gray-500">{selectedImage.name}</p>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-8">
        <TextField
          id={"phone_number"}
          name={"phone_number"}
          label={"phone number"}
          type={"number"}
          placeholder={"555-222-333"}
          onChange={handleChange}
        />

        <TextField
          id={"street"}
          label={"street"}
          name={"street"}
          type={"text"}
          onChange={handleChange}
        />
        <SelectField
          id={"specialization"}
          name={"specialization"}
          type={"text"}
          label={"Legal specialization"}
          placeholder={"Select a specialization"}
          options={[
            { value: "Agression", label: "Agression" },
            { value: "Crime", label: "Crime" },
            { value: "Robbing", label: "Robbing" },
          ]}
          onChange={handleChange}
        />

        <SelectField
          id={"language"}
          name={"language"}
          label={"Language"}
          type={"text"}
          options={[
            { value: "FR", label: "FR" },
            { value: "AR", label: "AR" },
          ]}
          onChange={handleChange}
        />
        <TextField
          id={"city"}
          label={"city"}
          name={"city"}
          type={"text"}
          onChange={handleChange}
        />
        <TextField
          id={"state"}
          label={"state"}
          name={"state"}
          type={"text"}
          onChange={handleChange}
        />

        <TextField
          id={"country"}
          label={"country"}
          type={"text"}
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
          type={"text"}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end m-4">
        <button
          onClick={handleSubmit}
          className="transition-transform transform hover:opacity-90 duration-500  mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2"
        >
          <p>{t("save")}</p>
        </button>
      </div>
    </form>
  );
};

export default UserEditView;
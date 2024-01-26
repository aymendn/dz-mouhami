import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import TextField from "../../components/TextField";
import { useState } from "react";
import SelectField from "../../components/SelectField";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import axios from "axios";

const EditProfilePage = () => {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

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

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    document.getElementById("imageInput").click();
  };

  const handleChange = (e) =>{

    setData(prev=>({...prev,[e.target.name]: e.target.value}))
   
} 
  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl = 'http://127.0.0.1:8000/core/dashboard/{id}/';
  
    axios.put(apiUrl, data)
      .then(response => {
        
        console.log(response.data);
      })
      .catch(error => {
        console.error('Erreur :', error);
      });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <form className="w-full max-w-4xl">
          <h1 className="text-3xl m-8 font-semibold text-[#094B72]">
            {t("editProfile")}
          </h1>
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
          <TextField id={"age"} 
          name={"age"} 
          label={"age"} 
          placeholder={"45"} 
          onChange={handleChange}
           />

          <SelectField
              id={"gender"}
              label={"gender"}
              placeholder={"gender"}
              options={[
                { value: "Femme", label: "Femme" },
                { value: "homme", label: "homme" },
              ]}
              onChange={handleChange}
            />
            <TextField id={"phone"} name={"phone_number"} label={"Phone"} type={"number"} placeholder={"06 00 00 00 00"} onChange={handleChange}/>


          <TextField id={"street"} name={"street"} label={"street"}  onChange={handleChange}/>

          <TextField id={"city"} label={"city"} placeholder={"Paris"} onChange={handleChange}/>

          <TextField id={"state"} name={"state"} label={"state"}  onChange={handleChange}/>

          <TextField id={"zip_code"} name={"zip_code"} label={"zip code"} type={"number"} onChange={handleChange}/>

          <TextField id={"country"} name={"country"} label={"country"}  onChange={handleChange}/>
        </div>


          <div className="flex justify-end m-4">
            <button onClick={handleSubmit} className="transition-all hover:opacity-90 mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
              <p>{t("save")}</p>
            </button>
          </div>
        </form>
      </div>
      <div className=" lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default EditProfilePage;

import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import TextField from "../../components/TextField";
import { useState } from "react";
const EditProfilePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    setSelectedImage(file);
  };

  const handleImageClick = () => {
    // Trigger the file input click when the image is clicked
    document.getElementById("imageInput").click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <form>
          <h1 className="text-3xl m-8 font-semibold text-[#094B72]">
            Edit your profil
          </h1>
          <label
            htmlFor="imageInput"
            className="block text-md m-6 font-medium text-[#094B72] "
          >
            Upload a Picture
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
              <div className="ml-3">
                <p className="text-sm text-gray-500">{selectedImage.name}</p>
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6 m-8">
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

          <div className="flex justify-end m-4">
            <button className="transition-transform transform hover:scale-105 duration-500  mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2">
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;

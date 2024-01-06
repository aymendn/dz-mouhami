import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
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
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="John"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="Doe"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 border border-gray-300 w-96"
                placeholder="Johndoe@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder="555-222-111"
              />
            </div>
            <div class="mb-4">
              <label
                for="Specification"
                class="block text-sm font-medium text-[#103F5BE5]"
              >
                Legal Specification
              </label>
              <div class="">
                <select
                  id="Specification"
                  name="Specification"
                  autocomplete="Specification-name"
                  className="mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96  ring-inset ring-slate-50 focus:ring-0 focus:ring-inset focus:ring-slate-600"
                >
                  <option>Agression</option>
                  <option>Crime</option>
                  <option>Robbing</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="Lawfirm"
                className="block text-sm font-medium text-[#103F5BE5]"
              >
                Lawfirm
              </label>
              <input
                type="text"
                id="Lawfirm"
                name="Lawfirm"
                className="focus:border-none mt-1 p-2 rounded-2xl bg-slate-50 required hover:bg-slate-100 border border-gray-300 w-96"
                placeholder=".."
              />
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

import Footer from "../../components/Footer";
import React, { useState } from "react";
import Navbar from "../../components/NavbarNoAction";
import { RegistrationFormStepper } from "../../components/Stepper";
import validation from "../../assets/person_check.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../utils/UseTokenHook";
import { toast } from "react-toastify";
import LoadingOverlay from "../../components/LoadingOverlay";

const uploadDocument = async (data, token, id) => {
  const response = await axios.post(`/core/lawyers/${id}/documents/`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

const LawyerForm2Page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const Navigate = useNavigate();
  const token = useToken();

  const [document1, setDocument1] = useState(null);
  const [document2, setDocument2] = useState(null);

  const hanldChangeDocument1 = (e) => {
    console.log("doc1 selected=========", e.target.files[0]);
    setDocument1(e.target.files[0]);
  };

  const hanldChangeDocument2 = (e) => {
    console.log("doc2 selected=========", e.target.files[0]);
    setDocument2(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);

      e.preventDefault();

      // first get the id from user lawyer info request:
      const infoResponse = await axios("/core/lawyers/", {
        method: "get",
        headers: {
          Authorization: token,
        },
      });

      const lawyerId = (infoResponse.data[0] || {}).id || null;

      const formDataDoc1 = new FormData();
      formDataDoc1.append("pdf_file", document1);

      const formDataDoc2 = new FormData();
      formDataDoc2.append("pdf_file", document2);

      await uploadDocument(formDataDoc1, token, lawyerId);
      await uploadDocument(formDataDoc2, token, lawyerId);

      toast.success("Documents uploaded successfully");
      Navigate(`/lawyer-registrationStep2/validation`);
    } catch (error) {
      console.log(error);
      toast.error("Error uploading documents");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar></Navbar>
      <div className="flex flex-col items-center ">
        <RegistrationFormStepper activeStep={2} />
      </div>
      <div className="mt-8  text-center ">
        <h1 className="text-[#0F3146] text-5xl font-semibold">
          Submit Essentials Documents
        </h1>
        <p className="p-4 text-[#496C80] text-md text-center ">
          Upload required documents to showcase your legal expertise and foster
          trust with potential clients on DZ-Mouhami.
        </p>
      </div>

      <LoadingOverlay
        isLoading={isLoading}
        className={"flex flex-col items-center"}
      >
        <form class="my-8 mx-16 lg:mx-64 flex items-center space-x-6">
          <label htmlFor="Lawfirm" className="block ">
            <h1 className="text-[#15394E] text-lg font-medium">
              Photo Identification
            </h1>
            <p className="text-sm font-normal text-[#103F5BE5]">
              Provide a clear photo ID to build transparency and surely<br></br>
              trust with potential clients.
            </p>
          </label>
          <label class="block">
            <input
              name="document1"
              type="file"
              accept="application/pdf"
              placeholder="Upload your document"
              alt="Upload your document"
              className="block text-sm text-slate-500
        file:me-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px] 
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "
              onChange={hanldChangeDocument1}
            />
            {document1 && (
              <p className="text-sm font-normal text-[#103F5BE5] pt-2">
                Chosen file: {document1?.name}
              </p>
            )}
          </label>
        </form>
        <form class="my-8  mx-16 lg:mx-64 flex items-center space-x-6">
          <label htmlFor="Lawfirm" className="block ">
            <h1 className="text-[#15394E] text-lg font-medium">
              Professional License
            </h1>
            <p className="text-sm font-normal text-[#103F5BE5]">
              Demonstrate your official authorization to practice law.
            </p>
          </label>
          <label class="block">
            <input
              name="document2"
              type="file"
              accept="application/pdf"
              className="block text-sm text-slate-500
        file:me-4 file:py-2 file:px-4
        file:rounded-xl file:w-full  file:h-[200px]
        file:text-sm file:font-semibold file:border-2 
        file:bg-slate-50 file:text-[#103F5BE5]
        hover:file:bg-slate-100
        "
              onChange={hanldChangeDocument2}
            />
            {document2 && (
              <p className="text-sm font-normal text-[#103F5BE5] pt-2">
                Chosen file: {document2?.name}
              </p>
            )}
          </label>
        </form>
        <div className="flex justify-end m-4"></div>
      </LoadingOverlay>
      <button
        onClick={handleSubmit}
        className="mb-10 transition-all hover:opacity-90   mx-4 border-1 bg-[#094B72] py-3 px-8 rounded-3xl text-white font-normal text-md flex gap-2"
      >
        <img src={validation} alt="Validation" />
        Continue
      </button>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LawyerForm2Page;

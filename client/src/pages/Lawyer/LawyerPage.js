import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import MainInfo from "./MainInfo";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Address from "./Address";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";

const getLawyer = async ({ id }) => {
  const { data } = await axios.get(`core/lawyer-view/${id}/`);
  return data;
};

const LawyerPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["lawyer", { id }], () =>
    getLawyer({ id })
  );

  if (isLoading) {
    return (
      <div>
        <p>id: {id}</p>
        <Loading className="h-screen" />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 flex flex-col justify-center items-center h-screen w-screen p-8">
        Error: {error.message}
        <div className="text-sm text-gray-500 text-center">
          Error data: {JSON.stringify(error)}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen max-w-[70rem] mx-2 md:mx-6 mb-12 mt-6 gap-6 ">
        {/* main (2/3) */}
        <div className="w-full md:w-2/3 h-full flex flex-col gap-6">
          {/* Main info */}
          <div className="rounded-2xl border-2 border-slate-100 p-8">
            <MainInfo lawyerData={data} />
          </div>

          {/* Reviews */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Reviews />
          </div>
        </div>
        {/* sidebar (1/3) */}
        <div className="w-full md:w-1/3 h-full flex flex-col gap-6">
          {/* Contact */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Contact lawyerData={data} />
          </div>

          {/* Address */}
          <div className="rounded-2xl border-2 border-slate-100 p-8 ">
            <Address />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default LawyerPage;

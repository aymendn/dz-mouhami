import React from "react";
import Sidebar from "../../components/Sidebar";
import Delete from "../../assets/delete.svg";
import Accept from "../../assets/check.svg";
import AdminNavbar from "./AdminNavbar";
import SvgColor from "react-svg-color";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../../utils/UseTokenHook";
import { useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import LoadingOverlay from "../../components/LoadingOverlay";
import { toast } from "react-toastify";
import PaginationNav from "../Search/PaginationNav";

const AdminPage = () => {
  // make pagination in url (?page=1)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page");
  const pageNumber = parseInt(page) || 1;

  const [isLoading, setIsLoading] = useState(false);

  const token = useToken();
  const [requestsData, setrequestsData] = useState([]);

  const fetchAllrequestsData = async () => {
    console.log("===========================");
    console.log("fetching all requests data from page ", pageNumber);
    console.log("url: ", `/core/dashboard/?page=${pageNumber}`);
    console.log("===========================");
    setIsLoading(true);
    try {
      const res = await axios.get(
        `/core/dashboard/?page=${pageNumber}`,
        requestsData,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setrequestsData(res.data?.results || []);
    } catch (err) {
      console.log("erreur ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllrequestsData();
  }, []);

  const handleAccept = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/core/dashboard/${id}/`,
        {
          approved: true,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Lawyer accepted successfully");
      // reload requests
      fetchAllrequestsData();
    } catch (error) {
      toast.error("Error while accepting lawyer");
      setIsLoading(false);
    }
  };

  const handleRefuse = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/core/dashboard/${id}/`,
        {
          approved: false,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Lawyer refused successfully");
      // reload requests
      fetchAllrequestsData();
    } catch (error) {
      toast.error("Error while refusing lawyer");
      setIsLoading(false);
    }
  };

  const handlePageChanged = (pageNumber) => {
    window.location.href = `/admin?page=${pageNumber}`;
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="z-50 w-full">
        <AdminNavbar />
      </div>

      <div className="flex-1 py-4 px-0 lg:px-8 max-w-5xl w-full">
        <div className="m-6">
          <h1 className="text-2xl font-bold mb-1 text-[#094B72]">
            Lawyers Pending Registrations
          </h1>
          <p className="text-[#103F5BB2] text-sm font-medium">
            There are {requestsData.length} unvalidated lawyers
          </p>
        </div>
        <LoadingOverlay isLoading={isLoading}>
          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className="bg-slate-50 text-[#26495D] text-sm l">
                <th className="border border-slate-200 px-4 py-2">Nom</th>
                <th className="border border-slate-200 px-4 py-2">Prenon</th>
                <th className="border border-slate-200 px-4 py-2">
                  specialization
                </th>
                <th className="border border-slate-200 px-4 py-2">Document</th>
                <th className="border border-slate-200 px-4 py-2">Status</th>
                <th className="border border-slate-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestsData.map((requests, index) => (
                <tr key={index}>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.first_name}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.last_name}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {reduceSpecialization(requests.specialization)}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.document}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    <span
                      className={`bg-${getLawyerStatusColor(
                        requests.approved
                      )} px-2 py-1 rounded-full text-sm  border text-white`}
                    >
                      {getLawyerStatus(requests.approved)}
                    </span>
                  </td>
                  <td className="border border-slate-200 px-4 py-2 ">
                    <div className="flex flex-row gap-2 ">
                      <button
                        onClick={() => handleAccept(requests.id)}
                        className=" bg-green-500 py-2 px-6 rounded-3xl text-white font-normal text-md flex flex-row hover:bg-green-700 duration-300  items-center gap-2"
                      >
                        <div className="w-4 h-4">
                          <SvgColor svg={Accept} colors={["#FFF", "#FFF"]} />
                        </div>
                        Accept
                      </button>
                      <button
                        onClick={() => handleRefuse(requests.id)}
                        className="   bg-red-500  px-6 py-2 ps-4 rounded-3xl text-white font-normal text-md flex flex-row hover:bg-red-700 duration-300 items-center gap-2 "
                      >
                        <img src={Delete} alt="Refuse" />
                        <p>Refuse</p>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </LoadingOverlay>
      </div>
      <div className="flex justify-center items-center w-full pb-16 pt-2">
        <PaginationNav
          onChanged={handlePageChanged}
          pagesCount={10}
          currentPage={pageNumber}
        />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AdminPage;

const reduceSpecialization = (specialization) => {
  const specializations = specialization.split(",");
  return specializations.slice(0, 3).join(", ");
};

const getLawyerStatus = (approved) => {
  if (approved === null) {
    return "Pending";
  } else if (approved === true) {
    return "Accepted";
  } else {
    return "Refused";
  }
};

const getLawyerStatusColor = (approved) => {
  if (approved === null) {
    return "yellow-500";
  } else if (approved === true) {
    return "green-500";
  } else {
    return "red-500";
  }
};

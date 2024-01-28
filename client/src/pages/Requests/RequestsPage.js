import React from "react";
import Sidebar from "../../components/Sidebar";
import Delete from "../../assets/delete.svg";
import Accept from "../../assets/check.svg";
import Navbar from "../../components/ProfileNavbar";
import SvgColor from "react-svg-color";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useToken } from "../../utils/UseTokenHook";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

const RequestsPage = () => {
  const token = useToken();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const [requestsData, setrequestsData] = useState([]);

  const fetchAllrequestsData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/core/appointments-requests", {
        headers: {
          Authorization: token,
        },
      });
      setrequestsData(res.data?.results || []);
      console.log(res.data?.results || []);
    } catch (err) {
      console.log("erreur ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllrequestsData();
  }, []);

  const [requests, setRequests] = useState();

  const handleAccept = async (id) => {
    try {
      const response = await axios.post(
        `/core/accept-appointment/${id}/`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Le rendez-vous a été accepté avec succès");
      fetchAllrequestsData();
    } catch (error) {
      toast.error("Erreur lors de la soumission de la demande");
    }
  };
  const handleRefuse = async (id) => {
    try {
      const response = await axios.post(
        `/core/refuse-appointment/${id}/`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      toast.success("Le rendez-vous a été refusé avec succès");
      fetchAllrequestsData();
    } catch (error) {
      toast.error("Erreur lors de la soumission de la demande");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="flex-1 py-4">
          <div className="m-6">
            <h1 className="text-2xl font-bold mb-1 text-[#094B72]">
              {t("Demandes")}
            </h1>
            <p className="text-[#103F5BB2] text-sm font-medium">
              {requestsData.length} {t("Demandes")}
            </p>
          </div>
          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className="bg-slate-50 text-[#26495D] text-sm l">
                <th className="border border-slate-200 px-4 py-2">
                  {t("firstName")}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {"lastName"}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {t("age")}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {t("Action")}
                </th>
              </tr>
            </thead>
            <tbody>
              {requestsData.map((requests, index) => (
                <tr key={index}>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.id}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.name}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.surname}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {requests.age}
                  </td>
                  <td className="border border-slate-200 px-4 py-2 ">
                    <div className="flex gap-2 ">
                      <button
                        onClick={() => handleAccept(requests.id)}
                        className="transition-transform transform hover:scale-105   bg-green-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-green-700 duration-300  items-center gap-2 "
                      >
                        <SvgColor svg={Accept} colors={["#FFF", "#FFF"]} />
                        Accept
                      </button>
                      <button
                        onClick={() => handleRefuse(requests.id)}
                        className=" transition-transform transform hover:scale-105  bg-red-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-red-700 duration-300 items-center gap-2 "
                      >
                        <img src={Delete} alt="Refuse" />
                        Refuse
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <Loading className="py-24 px-4" />}
        </div>
      </div>
      <div className=" lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default RequestsPage;

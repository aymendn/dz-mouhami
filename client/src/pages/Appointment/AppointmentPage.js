import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useToken } from "../../utils/UseTokenHook";
import Loading from "../../components/Loading";

const AppointementPage = () => {
  const { t } = useTranslation();
  const token = useToken();

  const [isLoading, setIsLoading] = useState(false);
  const [rdvData, setrdvData] = useState([]);

  useEffect(() => {
    const fetchAllrdvData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("/core/appointments", {
          headers: {
            Authorization: token,
          },
        });
        setrdvData(res.data?.results || []);
      } catch (err) {
        console.log("erreur ", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllrdvData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 py-4">
          <div className="m-6">
            <h1 className="text-2xl font-bold mb-1 text-[#094B72]">
              {t("schedule")}
            </h1>
            <p className="text-[#103F5BB2] text-sm font-medium">
              {rdvData.length} {t("Rendezvous")}
            </p>
          </div>

          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className="bg-slate-50 text-[#26495D] text-sm l">
                <th className="border border-slate-200 px-4 py-2">
                  {t("firstName")}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {t("lastName")}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {t("Age")}
                </th>
                <th className="border border-slate-200 px-4 py-2">
                  {t("schedule")}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data, replace this with your actual data */}
              {rdvData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-slate-200 px-4 py-2">
                    {data.name}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {data.surname}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {data.age}
                  </td>
                  <td className="border border-slate-200 px-4 py-2">
                    {data.schedule}
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

export default AppointementPage;

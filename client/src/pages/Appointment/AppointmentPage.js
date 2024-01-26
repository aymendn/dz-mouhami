import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/ProfileNavbar";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const AppointementPage = () => {
  const {t} = useTranslation()
  
  const [rdvData, setrdvData] = useState([])
  useEffect(()=>{
      const fetchAllrdvData = async ()=>{
          try{
              const token = "6aaeffb7d25c4697859f4135245956eec6012708"
              const res =await axios.get('http://127.0.0.1:8000/core/appointments' ,{
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
              }) 
              setrdvData(res.data)
              console.log(res.data)
          }catch(err){
              console.log('erreur ',err)
          }
      } 
      fetchAllrdvData()
  },[])

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
              You have {rdvData.length} Appointements
            </p>
          </div>
          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className="bg-slate-50 text-[#26495D] text-sm l">
                <th className="border border-slate-200 px-4 py-2">{t("firstname")}</th>
                <th className="border border-slate-200 px-4 py-2">{t(" lastname")}</th>
                <th className="border border-slate-200 px-4 py-2">{t("age")}</th>
                <th className="border border-slate-200 px-4 py-2">{t("schedule")}</th>
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
        </div>
      </div>
      <div className=" lg:hidden">
        <Footer />
      </div>
    </div>
  );
};

export default AppointementPage;

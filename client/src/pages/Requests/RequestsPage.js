import React from "react";
import Sidebar from "../../components/Sidebar";
import Delete from "../../assets/delete.svg";
import Accept from "../../assets/check.svg";
import Navbar from "../../components/ProfileNavbar";
import SvgColor from "react-svg-color";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
const RequestsPage = () => {
  const [requestsData, setrequestsData] = useState([])
  useEffect(()=>{
      const fetchAllrequestsData = async ()=>{
          try{
              const token = "6aaeffb7d25c4697859f4135245956eec6012708"
              const res =await axios.get('http://127.0.0.1:8000/core/appointments-request' ,{
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
              }) 
              setrequestsData(res.data)
              console.log(res.data)
          }catch(err){
              console.log('erreur ',err)
          }
      } 
      fetchAllrequestsData()
  },[])


  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <Navbar></Navbar>
      </div>
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <div className="flex-1 py-4">
          <div className="m-6">
            <h1 className="text-2xl font-bold mb-1 text-[#094B72]">Requests</h1>
            <p className="text-[#103F5BB2] text-sm font-medium">
              You have {requestsData.length} requests
            </p>
          </div>
          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className="bg-slate-50 text-[#26495D] text-sm l">
                <th className="border border-slate-200 px-4 py-2">Name</th>
                <th className="border border-slate-200 px-4 py-2">Surname</th>
                <th className="border border-slate-200 px-4 py-2">Age</th>
                <th className="border border-slate-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestsData.map((requests, index) => (
                <tr key={index}>
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
                      <button className="transition-transform transform hover:scale-105   bg-green-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-green-700 duration-300  items-center gap-2 ">
                        <SvgColor svg={Accept} colors={["#FFF", "#FFF"]} />
                        Accept
                      </button>
                      <button className=" transition-transform transform hover:scale-105  bg-red-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-red-700 duration-300 items-center gap-2 ">
                        <img src={Delete} alt="Refus" />
                        Refuse
                      </button>
                    </div>
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

export default RequestsPage;

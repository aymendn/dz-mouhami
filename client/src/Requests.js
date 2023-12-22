
import React from 'react';
import Sidebar from './Sidebar';
import Refus from './Assets/delete.png'
import Navbar from './NavbarProfil';
const Requests = () => {

 const requestsData = [
  {
    name:'maya',
    surname:'mellaz',
    age : 20,
  },
  {
    name:'aya',
    surname:'lamiri',
    age : 19,
  }
 ]

  return (
    <div>
        <Navbar></Navbar>
          <div className="flex">
        
        <Sidebar></Sidebar>
        <div className="flex-1 py-4">
        <div className='m-6'>
        <h1 className="text-2xl font-bold mb-1 text-[#094B72]">Requests</h1>
          <p className='text-[#103F5BB2] text-sm font-medium'>You have {requestsData.length} requests</p>
        </div>
          <table className="min-w-full bg-white border border-slate-200 ">
            <thead>
              <tr className='bg-slate-50 text-[#26495D] text-sm l'>
                <th className="border border-slate-200 px-4 py-2">Name</th>
                <th className="border border-slate-200 px-4 py-2">Surname</th>
                <th className="border border-slate-200 px-4 py-2">Age</th>
                <th className="border border-slate-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requestsData.map((requests,index) =>
              (
                <tr key={index}>
                <td className="border border-slate-200 px-4 py-2">{requests.name}</td>
                <td className="border border-slate-200 px-4 py-2">{requests.surname}</td>
                <td className="border border-slate-200 px-4 py-2">{requests.age}</td>
                <td className="border border-slate-200 px-4 py-2 ">
                  <div className='flex gap-2 '>
                  <button className= "transition-transform transform hover:scale-105 duration-500   bg-green-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-green-700 duration-300 ">
                  ✓ Accept
                  </button>
                  <button className= " transition-transform transform hover:scale-105 duration-500  bg-red-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-red-700 duration-300 items-center gap-2 ">
                  <img src={Refus} alt="Refus" />
                      Refuse
                  </button> </div>
                </td>
              </tr>
              )
              
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  );
};

export default Requests;

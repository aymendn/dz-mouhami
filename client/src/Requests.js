
import React from 'react';
import Sidebar from './Sidebar';
import Refus from './Assets/delete.png'
import Navbar from './NavbarProfil';
const Requests = () => {
  return (
    <div>
        <Navbar></Navbar>
          <div className="flex">
        
        <Sidebar></Sidebar>
        <div className="flex-1 py-4">
        <div className='m-6'>
        <h1 className="text-2xl font-bold mb-1 text-[#094B72]">Requests</h1>
          <p className='text-[#103F5BB2] text-sm font-medium'>You have 20 requests</p>
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
              {/* Sample data, replace this with your actual data */}
              <tr>
                <td className="border border-slate-200 px-4 py-2">John</td>
                <td className="border border-slate-200 px-4 py-2">Doe</td>
                <td className="border border-slate-200 px-4 py-2">25</td>
                <td className="border border-slate-200 px-4 py-2 ">
                  <div className='flex gap-2 '>
                  <button className= " bg-green-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-green-200 duration-300 ">
                  ✓ Accept
                  </button>
                  <button className= " bg-red-500 py-2  px-6  rounded-3xl text-white font-normal text-md flex hover:bg-red-200 duration-300 items-center gap-2 ">
                  <img src={Refus} alt="Refus" />
                      Refuse
                  </button> </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  );
};

export default Requests;

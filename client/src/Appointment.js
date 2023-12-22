
import React from 'react';
import Sidebar from './Sidebar';
import Refus from './Assets/delete.png'
import Navbar from './NavbarProfil';
const Appointement = () => {
  return (
    
    <div>
        <Navbar></Navbar>
        <div className="flex">
        
      <Sidebar></Sidebar>
      <div className="flex-1 py-4">
      <div className='m-6'>
      <h1 className="text-2xl font-bold mb-1 text-[#094B72]">Appointements schedule</h1>
        <p className='text-[#103F5BB2] text-sm font-medium'>You have 20 Appointements</p>
      </div>
        <table className="min-w-full bg-white border border-slate-200 ">
          <thead>
            <tr className='bg-slate-50 text-[#26495D] text-sm l'>
              <th className="border border-slate-200 px-4 py-2">Name</th>
              <th className="border border-slate-200 px-4 py-2">Surname</th>
              <th className="border border-slate-200 px-4 py-2">Age</th>
              <th className="border border-slate-200 px-4 py-2">Schedule</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data, replace this with your actual data */}
            <tr>
              <td className="border border-slate-200 px-4 py-2">John</td>
              <td className="border border-slate-200 px-4 py-2">Doe</td>
              <td className="border border-slate-200 px-4 py-2">25</td>
              <td className="border border-slate-200 px-4 py-2">8h00</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Appointement;


import React from 'react';
import Sidebar from './Sidebar';
import Refus from './Assets/delete.png'
import Navbar from './NavbarProfil';
const Appointement = () => {

  const rdvData=[
    {name:'Melissa',
    surname:'Mellaz',
    age:'20',
    schedule:'10h00'},
    {name:'aya',
    surname:'lamiri',
    age:'19',
    schedule:'10h45'},
   
  ]
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
           { rdvData.map((data,index)=>(
            <tr key={index}>
            <td className="border border-slate-200 px-4 py-2">{data.name}</td>
            <td className="border border-slate-200 px-4 py-2">{data.surname}</td>
            <td className="border border-slate-200 px-4 py-2">{data.age}</td>
            <td className="border border-slate-200 px-4 py-2">{data.schedule}</td>
            
          </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Appointement;

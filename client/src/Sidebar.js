import React from 'react';
import home from './Assets/home (1).png'
import Request from './Assets/live_help.png'
import appointements from './Assets/calendar_month.png'
import profile from './Assets/account_circle.png'
import logout from './Assets/move_item.png'
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="p-6 text-white  w-1/5 p-4  border-r-1 bg-slate-50">
      <div className="mb-4">
        <h2 className="text-sm text-[#708FA2]
        font-normal">Main Menu</h2>
        <ul className="mt-2 text-md font-medium text-[#15394E] ">
          <Link to='#'>
            <li className="cursor-pointer mb-3 hover:bg-[#E5F2FA] hover:duration-500 rounded-xl p-2 flex items-center gap-2">
            <img   src={home}></img>
            dashboard</li></Link></ul>
        <ul className="mt-2 text-md font-medium text-[#15394E] ">
          <Link to='/Appointments'>
            <li className="cursor-pointer mb-3 hover:bg-[#E5F2FA] hover:duration-500 rounded-xl p-2 flex items-center gap-2">
            <img   src={appointements}></img>
            Appointements</li></Link>
            <Link to='/Requests'>
            <li className="cursor-pointer mb-3 hover:bg-[#E5F2FA] hover:duration-500 rounded-xl p-2 flex items-center gap-2">
            <img   src={Request}></img>
           Requests</li>
           </Link>
          
        </ul>
        <h2 className="text-sm text-[#708FA2]
        font-normal">Profil</h2>
        <ul className="mt-2 text-md font-medium text-[#15394E] ">
          <Link to='/Edit'>
          <li className="cursor-pointer mb-3 hover:bg-[#E5F2FA] hover:duration-500 rounded-xl p-2 flex items-center gap-2">
            <img   src={profile}></img>
            Edit profil</li>

          </Link>
            <li className="cursor-pointer mb-3 hover:bg-[#E5F2FA] hover:duration-500 rounded-xl p-2 flex items-center gap-2 text-red-500">
            <img   src={logout}></img>
            Logout</li>
          
        </ul>
         
         <div className='mt-64'>
            <Link to='/'><a href='#' className='text-lg  font-normal text-[#094B72]'>contact</a></Link>
            <Link to='/'><a href='#' className='text-lg px-2 font-normal text-[#094B72]'>About</a></Link>
            <Link to='/'><a href='#' className='text-lg px-2 font-normal text-[#094B72]'>Privacy policy</a></Link>
            <Link to='/'><a href='#' className='text-lg px-2 font-normal text-[#094B72]'>Terms</a></Link>
            <p className='pt-8 text-sm text-[#094B7299]'>
            All rights reserved. © 2023 DZ-Mouhami.
            </p>
         </div>

      </div>
    </div>
  );
};

export default Sidebar;

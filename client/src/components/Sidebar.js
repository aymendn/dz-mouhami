import React from "react";
import homeIcon from "../assets/home_sidebar.svg";
import requestIcon from "../assets/request_sidebar.svg";
import appointementsIcon from "../assets/appointments_sidebar.svg";
import profileIcon from "../assets/profile_sidebar.svg";
import logoutIcon from "../assets/logout.svg";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";
const Sidebar = () => {
  return (
    <div className="text-white  w-1/6 p-4 min-w-[200px] border-r-1 bg-slate-50 flex flex-col">
      <h2 className="text-sm text-[#708FA2]  font-normal mb-1">Main Menu</h2>
      <SidebarLink icon={homeIcon} title="Dashboard" to="/dashboard" />
      <SidebarLink
        icon={appointementsIcon}
        title="Appointements"
        to="/appointments"
      />
      <SidebarLink icon={requestIcon} title="Requests" to="/requests" />
      <h2 className="text-sm text-[#708FA2] font-normal mb-1 mt-6">Profile</h2>

      <SidebarLink icon={profileIcon} title="Edit profile" to="/edit" />
      <SidebarLink icon={logoutIcon} title="Logout" to="/" color="red-500" />
      <div className="mt-auto mb-10">
        <div className=" flex items-start justify-start flex-wrap gap-x-4 gap-y-1">
          <Link to="/contact">
            <p className="text-sm  font-normal text-[#094B72] hover:underline">
              contact
            </p>
          </Link>
          <Link to="/about">
            <p className="text-sm font-normal text-[#094B72] hover:underline">
              About
            </p>
          </Link>
          <Link to="/privacy">
            <p className="text-sm font-normal text-[#094B72] hover:underline">
              Privacy policy
            </p>
          </Link>
          <Link to="/terms">
            <p className="text-sm font-normal text-[#094B72] hover:underline">
              Terms of use
            </p>
          </Link>
        </div>
        <p className="text-sm text-[#094B7299] mt-4">
          All rights reserved. © 2023 DZ-Mouhami.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;

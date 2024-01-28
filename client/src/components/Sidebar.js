import React from "react";
import homeIcon from "../assets/home_sidebar.svg";
import requestIcon from "../assets/request_sidebar.svg";
import appointementsIcon from "../assets/appointments_sidebar.svg";
import profileIcon from "../assets/profile_sidebar.svg";
import logoutIcon from "../assets/logout.svg";
import { Link } from "react-router-dom";
import SidebarLink from "./SidebarLink";
import { useTranslation } from "react-i18next";
import { useUser } from "../utils/UseTokenHook";
const Sidebar = () => {
  const { user, logout } = useUser();
  const { t } = useTranslation();
  return (
    <div className="hidden lg:flex max-w-[280px]">
      <div className="text-white  p-4 w-full border-r-1 bg-slate-50 flex flex-col">
        <h2 className="text-sm text-[#708FA2]  font-normal mb-1">Main Menu</h2>
        <SidebarLink icon={homeIcon} title={t("dashboard")} to="/dashboard" />
        <SidebarLink
          icon={appointementsIcon}
          title={t("appointments")}
          to="/appointments"
        />
        <SidebarLink icon={requestIcon} title={t("requests")} to="/requests" />

        {/* Profile Section */}
        <h2 className="text-sm text-[#708FA2] font-normal mb-1 mt-6">
          {t("profile")}
        </h2>
        <SidebarLink icon={profileIcon} title={t("editProfile")} to="/edit" />
        <button onClick={logout}>
          <SidebarLink
            icon={logoutIcon}
            title={t("signOut")}
            to="/"
            isRed={true}
          />
        </button>
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
    </div>
  );
};

export default Sidebar;

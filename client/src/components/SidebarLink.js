import { useLocation, Link } from "react-router-dom";

const SidebarLink = ({ icon, title, to, isRed }) => {
  let { pathname } = useLocation();
  let isActive = pathname === to;
  return (
    <div className="mb-1">
      <Link to={to}>
        <li
          className={`cursor-pointer rounded-lg px-3 py-2 flex items-center gap-2 hover:bg-slate-200 ${
            isActive ? "bg-slate-200" : ""
          }`}
        >
          <img src={icon}></img>
          <p
            className={`text-md font-medium ${
              isRed ? "text-red-500" : "text-blue-950"
            }`}
          >
            {title}
          </p>
        </li>
      </Link>
    </div>
  );
};

export default SidebarLink;

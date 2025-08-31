import React from "react";
import { FcRating } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../lib/conts/navigation";
import { Link, NavLink } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const baseClasses =
  "flex items-center gap-2 pl-6 py-2 font-light text-base w-full rounded-sm";
const activeClasses = "bg-amber-700 text-white rounded-sm";
const hoverClasses = "hover:bg-amber-800 hover:rounded-sm";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-900  text-amber-100 w-56 p-4 ">
      <Link to="/">
        <div className="flex flex-row gap-2 items-center p-4 text-1xl font-bold mb-2">
          <FcRating fontSize={28} />
          <span>OpenShop</span>
        </div>
      </Link>

      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>

      <div className="flex flex-col gap-2 pt-4  pb-6 border-t border-gray-600">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div
          className={`${baseClasses } ${hoverClasses} text-red-400 cursor-pointer`}
        >
          <span className="text-xl">
            <IoMdLogOut />
          </span>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? activeClasses : ""} ${hoverClasses} block`
      }
    >
      <span>{item.icon}</span>
      {item.label}
    </NavLink>
  );
}

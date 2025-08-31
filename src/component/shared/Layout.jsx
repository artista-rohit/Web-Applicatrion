import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-row bg-amber-50 h-screen w-screen overflow-hidden ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="bg-gray-200">
          <Header />
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

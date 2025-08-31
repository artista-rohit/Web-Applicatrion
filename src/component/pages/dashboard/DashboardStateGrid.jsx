import React from "react";
import { FaBriefcaseMedical, FaCartArrowDown, FaChartPie, FaUsers } from "react-icons/fa";
 

const DashboardStateGrid = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <BoxWraper>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-amber-300 text-amber-900 text-2xl">
          <FaBriefcaseMedical />
        </div>
        <div className=" pl-4">
          <span className="text-sm font-light text-gray-600">Total Sale</span>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-bold text-gray-800">$549824</strong>
            <span className="text-sm text-green-800">+234</span>
          </div>
        </div>
      </BoxWraper>
      <BoxWraper>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-red-300 text-red-900 text-2xl">
        <FaChartPie />
        </div>
        <div className=" pl-4">
          <span className="text-sm font-light text-gray-600">Total Expenses</span>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-bold text-gray-800">$549824</strong>
            <span className="text-sm text-green-800">+234</span>
          </div>
        </div>
      </BoxWraper>
      <BoxWraper>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-sky-300 text-sky-900 text-2xl">
        <FaUsers />
        </div>
        <div className=" pl-4">
          <span className="text-sm font-light text-gray-600">Total Customer</span>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-bold text-gray-800">$549824</strong>
            <span className="text-sm text-green-800">+234</span>
          </div>
        </div>
      </BoxWraper>
      <BoxWraper>
        <div className="flex justify-center items-center rounded-full h-12 w-12 bg-green-300 text-green-900 text-2xl">
        <FaCartArrowDown />
        </div>
        <div className=" pl-4">
          <span className="text-sm font-light text-gray-600">Total Order</span>
          <div className="flex items-center gap-2">
            <strong className="text-xl font-bold text-gray-800">$549824</strong>
            <span className="text-sm text-green-800">+234</span>
          </div>
        </div>
      </BoxWraper>
      
      
    </div>
  );
};

export default DashboardStateGrid;

function BoxWraper({ children }) {
  return (
    <div className="bg-gray-200 flex flex-1 rounded-xl p-4 items-center border-gray-100 border">
      {children}
    </div>
  );
}

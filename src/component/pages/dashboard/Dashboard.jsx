import React from "react";

import DashboardStateGrid from "./DashboardStateGrid";
import TransactionsChart from "./TransactionsChart";
import BuyerProfileChart from "./BuyerProfileChart";
import RecentOrder from "./RecentOrder";
import PopularProduct from "./PopularProduct";

const Dashboard = () => {
  return (
    <div className="flex  flex-col gap-4 h-screen overflow-y-auto pb-12">
      <DashboardStateGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransactionsChart />
        <BuyerProfileChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentOrder/>
        <PopularProduct/>
      </div>
       
    </div>
  );
};

export default Dashboard;

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Jan", Expense: 4000, Income: 2400 },
  { name: "Feb", Expense: 3000, Income: 1398 },
  { name: "Mar", Expense: 2000, Income: 9800 },
  { name: "Apr", Expense: 2780, Income: 3908 },
  { name: "May", Expense: 1890, Income: 4800 },
  { name: "Jun", Expense: 2390, Income: 3800 },
  { name: "Jul", Expense: 3490, Income: 4300 },
  { name: "Aug", Expense: 2000, Income: 9800 },
  { name: "Sep", Expense: 3100, Income: 4500 },
  { name: "Oct", Expense: 2650, Income: 5200 },
  { name: "Nov", Expense: 3800, Income: 4100 },
  { name: "Dec", Expense: 2950, Income: 6000 },
];

const TransactionsChart = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 bg-gray-200 rounded-2xl p-4">
        <h6 className="font-semibold">Transaction</h6>
   
    <div style={{ width: "100%", height: 300 }} className=" focus:outline-none" tabIndex={-1}>
      <ResponsiveContainer style={{ outline: "none" }} tabIndex={-1}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Income" fill="" />
          <Bar dataKey="Expense" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
};

export default TransactionsChart;

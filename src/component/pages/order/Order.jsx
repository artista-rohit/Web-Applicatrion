import React, { useState } from "react";
import { LuEye } from "react-icons/lu";
import OrderDetails from "./OrderDetails";
import AddOrder from "./AddOrder";

const orders = [
  {
    id: "12345",
    date: "24 Aug 2025",
    customer: "Rohit Maurya",
    total: "₹9,100",
    status: "Processing",
    details: {
      email: "rohit@example.com",
      phone: "+91 9876543210",
      address: "123, MG Road, Mumbai, India, 400001",
      payment: "Credit Card (**** 1234)",
      items: [
        { name: "Wireless Headphones", qty: 1, price: "₹2,500" },
        { name: "Smart Watch", qty: 2, price: "₹6,400" },
        { name: "Phone Case", qty: 1, price: "₹500" },
      ],
      subtotal: "₹9,400",
      shipping: "₹200",
      discount: "₹500",
      total: "₹9,100",
      shippingVia: "DHL Express",
      tracking: "DHL123456789IN",
      delivery: "28 Aug 2025",
    },
  },
  {
    id: "67890",
    date: "20 Aug 2025",
    customer: "Amit Sharma",
    total: "₹5,200",
    status: "Shipped",
    details: {
      email: "amit@example.com",
      phone: "+91 9988776655",
      address: "45, Park Street, Delhi, India, 110001",
      payment: "UPI",
      items: [
        { name: "Bluetooth Speaker", qty: 1, price: "₹2,200" },
        { name: "Laptop Stand", qty: 1, price: "₹3,000" },
      ],
      subtotal: "₹5,200",
      shipping: "₹0",
      discount: "₹0",
      total: "₹5,200",
      shippingVia: "BlueDart",
      tracking: "BD123456789IN",
      delivery: "25 Aug 2025",
    },
  },
];

const Order = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  // const [showCreate, setShowCreate] = useState(false);

  // const addOrder = (newOrder) => {
  //   setOrders([...orders, newOrder]);
  // };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-2xl font-semibold">Orders</h2>

      <button
          onClick={() => {
            SetShowCreate(true);
             
          }}
          className="px-4 py-2 rounded bg-amber-600 text-amber-50 hover:bg-amber-700"
        >
          Add Order
        </button>
      </div>
      
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border border-gray-200 text-left">
              Order ID
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left">Date</th>
            <th className="px-4 py-2 border border-gray-200 text-left">
              Customer
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left">
              Total
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left">
              Status
            </th>
            <th className="px-4 py-2 border border-gray-200 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="px-4 py-2 border border-gray-200">{order.id}</td>
              <td className="px-4 py-2 border border-gray-200">{order.date}</td>
              <td className="px-4 py-2 border border-gray-200">
                {order.customer}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {order.total}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                {order.status}
              </td>
              <td className="px-4 py-2 border border-gray-200">
                <button
                  onClick={() => setSelectedOrder(order)}
                  className="text-amber-500 flex gap-1 items-center px-2 py-1 bg-amber-50 rounded hover:text-gray-800"
                >
                  <LuEye /> View
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Order Details */}
      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}

      {/* Modal for  create Order  
      {showCreate &&(<AddOrder onAdd={addOrder} onClose={()=>SetShowCreate(false)}/>)} */}
    </div>
  );
};

export default Order;

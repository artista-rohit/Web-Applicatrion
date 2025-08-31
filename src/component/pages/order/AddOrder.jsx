// OrderCreate.jsx
import React, { useState } from "react";

const OrderCreate = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({
    id: "",
    date: "",
    customer: "",
    total: "",
    status: "Processing",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.customer) return; // simple validation

    // Add order
    onAdd({
      ...form,
      details: {
        email: "newcustomer@example.com",
        phone: "+91 0000000000",
        address: "New Address",
        payment: "Cash on Delivery",
        items: [],
        subtotal: form.total,
        shipping: "₹0",
        discount: "₹0",
        total: form.total,
        shippingVia: "Pending",
        tracking: "N/A",
        delivery: "Pending",
      },
    });

    setForm({ id: "", date: "", customer: "", total: "", status: "Processing" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-96 shadow">
        <h2 className="text-xl font-semibold mb-4">Create Order</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="id"
            placeholder="Order ID"
            value={form.id}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="customer"
            placeholder="Customer Name"
            value={form.customer}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="total"
            placeholder="Total (₹)"
            value={form.total}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>

          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-amber-500 text-white rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderCreate;

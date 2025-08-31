import React from "react";
import { Link, replace } from "react-router-dom";

const recentOrderData = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Shirley A. Lape",
    order_date: "2022-05-17",
    order_total: "$435.50",
    current_order_status: "PLACED",
    shipment_address: "Cottage Grove, OR Cottage Grove,97424",
  },
  {
    id: "3",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Ryan Carroll",
    order_date: "2022-05-14",
    order_total: "$96.35",
    current_order_status: "CONFIRMED",
    shipment_address: "Los Angeles, CA 90017",
  },
  {
    id: "3",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Mason Nash",
    order_date: "2022-05-17",
    order_total: "$836.44",
    current_order_status: "SHIPPED",
    shipment_address: "Westminster, CA 92683",
  },
  {
    id: "4",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Luke Parkin",
    order_date: "2022-05-16",
    order_total: "$334.50",
    current_order_status: "SHIPPED",
    shipment_address: "San Mateo, CA 94403",
  },
  {
    id: "5",
    product_id: "2345",
    customer_id: "76342",
    customer_name: "Sophia Turner",
    order_date: "2022-06-04",
    order_total: "$125.75",
    current_order_status: "PLACED",
    shipment_address: "Austin, TX 73301",
  },
  {
    id: "6",
    product_id: "5643",
    customer_id: "87213",
    customer_name: "James Lee",
    order_date: "2022-06-05",
    order_total: "$215.90",
    current_order_status: "CONFIRMED",
    shipment_address: "Dallas, TX 75201",
  },
  {
    id: "7",
    product_id: "7645",
    customer_id: "98214",
    customer_name: "Emma Wilson",
    order_date: "2022-06-07",
    order_total: "$542.00",
    current_order_status: "DELIVERED",
    shipment_address: "Seattle, WA 98101",
  },
  {
    id: "8",
    product_id: "8321",
    customer_id: "56231",
    customer_name: "Olivia Johnson",
    order_date: "2022-06-09",
    order_total: "$78.65",
    current_order_status: "CANCELLED",
    shipment_address: "San Francisco, CA 94105",
  },
  {
    id: "9",
    product_id: "1289",
    customer_id: "71243",
    customer_name: "William Brown",
    order_date: "2022-06-10",
    order_total: "$910.25",
    current_order_status: "PLACED",
    shipment_address: "Portland, OR 97035",
  },
  {
    id: "10",
    product_id: "9823",
    customer_id: "34212",
    customer_name: "Isabella Martinez",
    order_date: "2022-06-11",
    order_total: "$260.50",
    current_order_status: "DELIVERED",
    shipment_address: "Denver, CO 80202",
  },
  {
    id: "11",
    product_id: "6532",
    customer_id: "99231",
    customer_name: "Michael Davis",
    order_date: "2022-06-12",
    order_total: "$110.00",
    current_order_status: "CONFIRMED",
    shipment_address: "Las Vegas, NV 88901",
  },
  {
    id: "12",
    product_id: "7643",
    customer_id: "88123",
    customer_name: "Charlotte Miller",
    order_date: "2022-06-13",
    order_total: "$540.75",
    current_order_status: "SHIPPED",
    shipment_address: "San Diego, CA 92101",
  },
  {
    id: "13",
    product_id: "1872",
    customer_id: "34129",
    customer_name: "Benjamin Clark",
    order_date: "2022-06-14",
    order_total: "$385.20",
    current_order_status: "PLACED",
    shipment_address: "Chicago, IL 60601",
  },
  {
    id: "14",
    product_id: "7648",
    customer_id: "23781",
    customer_name: "Amelia Rodriguez",
    order_date: "2022-06-15",
    order_total: "$450.40",
    current_order_status: "DELIVERED",
    shipment_address: "Miami, FL 33101",
  },
  {
    id: "15",
    product_id: "8932",
    customer_id: "67123",
    customer_name: "Daniel Martinez",
    order_date: "2022-06-16",
    order_total: "$720.10",
    current_order_status: "CONFIRMED",
    shipment_address: "Houston, TX 77001",
  },
  {
    id: "16",
    product_id: "2190",
    customer_id: "77213",
    customer_name: "Mia Anderson",
    order_date: "2022-06-17",
    order_total: "$130.90",
    current_order_status: "CANCELLED",
    shipment_address: "Boston, MA 02108",
  },
  {
    id: "17",
    product_id: "6521",
    customer_id: "99234",
    customer_name: "Elijah Thomas",
    order_date: "2022-06-18",
    order_total: "$410.60",
    current_order_status: "SHIPPED",
    shipment_address: "Phoenix, AZ 85001",
  },
  {
    id: "18",
    product_id: "4712",
    customer_id: "55231",
    customer_name: "Harper Moore",
    order_date: "2022-06-19",
    order_total: "$190.75",
    current_order_status: "DELIVERED",
    shipment_address: "Atlanta, GA 30301",
  },
  {
    id: "19",
    product_id: "7623",
    customer_id: "33211",
    customer_name: "Lucas Taylor",
    order_date: "2022-06-20",
    order_total: "$640.80",
    current_order_status: "PLACED",
    shipment_address: "New York, NY 10001",
  },
  {
    id: "20",
    product_id: "9321",
    customer_id: "87122",
    customer_name: "Evelyn White",
    order_date: "2022-06-21",
    order_total: "$520.95",
    current_order_status: "CONFIRMED",
    shipment_address: "Philadelphia, PA 19019",
  },
];

const RecentOrder = () => {
  return (
    <div className="flex flex-1 flex-col bg-gray-200 rounded-2xl p-4 gap-2 h-96 overflow-y-auto mb-12">
      <div className="flex justify-between">
        <h6 className="font-semibold">Recent Order</h6>
        <button className="text-blue-600 cursor-pointer hover:underline">
          See All
        </button>
      </div>

      {/* Desktop Table */}
      <div className="mt-3 hidden md:block overflow-x-auto rounded-xl">
        <table className="min-w-full border-collapse border border-gray-200 text-sm text-gray-600">
          <thead className="bg-gray-100 text-gray-600 text-xs">
            <tr>
              <th className="border border-gray-50 px-4 py-3 text-left">ID</th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Product ID
              </th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Customer Name
              </th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Order Date
              </th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Order Total
              </th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Shipping Address
              </th>
              <th className="border border-gray-50 px-4 py-3 text-left">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="border border-gray-50 px-4 py-3">#{order.id}</td>
                <td className="border border-gray-50 px-4 py-3 text-blue-600 hover:underline">
                  <Link to={`/product/${order.product_id}`}>
                    {order.product_id}
                  </Link>
                </td>
                <td className="border border-gray-50 px-4 py-3">
                  <Link
                    to={`/customer/${order.customer_id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {order.customer_name}
                  </Link>
                </td>
                <td className="border border-gray-50 px-4 py-3">
                  {new Date(order.order_date).toLocaleDateString()}
                </td>
                <td className="border border-gray-50 px-4 py-3">
                  {order.order_total}
                </td>
                <td className="border border-gray-50 px-4 py-3">
                  {order.shipment_address}
                </td>
                <td className="border border-gray-50 px-4 py-3">
                  {getOrderStatus(order.current_order_status)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="mt-3 space-y-4 md:hidden">
        {recentOrderData.map((order) => (
          <div
            key={order.id}
            className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <p className="text-sm text-gray-600">
              <span className="font-semibold">ID:</span> #{order.id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Product ID:</span>{" "}
              {order.product_id}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Customer:</span>{" "}
              {order.customer_name}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Date:</span>{" "}
              {new Date(order.order_date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Total:</span> ${order.order_total}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Address:</span>{" "}
              {order.shipment_address}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Status:</span>{" "}
              {getOrderStatus(order.current_order_status)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrder;

export function getOrderStatus(status) {
  switch (status) {
    case "PLACED":
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-sky-700 bg-sky-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );

    case "PENDING":
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-yellow-700 bg-yellow-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );

    case "DELIVERED":
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-green-700 bg-green-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
      case "SHIPPED":
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-yellow-700 bg-yellow-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
      case "CONFIRMED":
        return (
          <span className="capitalize text-sm rounded-lg py-1 px-2 text-green-700 bg-green-100">
            {status.replaceAll("_", " ").toLowerCase()}
          </span>
        );
  

    case "CANCELLED":
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-red-700 bg-red-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );

    default:
      return (
        <span className="capitalize text-sm rounded-lg py-1 px-2 text-gray-700 bg-gray-100">
          {status.replaceAll("_", " ").toLowerCase()}
        </span>
      );
  }
}

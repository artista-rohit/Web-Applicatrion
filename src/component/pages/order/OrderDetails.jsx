import React from "react";

const OrderDetails = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h3 className="text-lg font-semibold">Order Details: #{order.id}</h3>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <table className="w-full border text-sm">
            <tbody>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Customer
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.customer}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Email
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.email}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Phone
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.phone}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Address
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.address}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Payment
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.payment}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Items
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  <ul className="list-disc list-inside">
                    {order.details.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} ×{item.qty} — {item.price}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Subtotal
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.subtotal}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Shipping
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.shipping}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Discount
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.discount}
                </td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-2 border border-gray-200">Total</td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.total}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Shipping via
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.shippingVia}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Tracking
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.tracking}
                </td>
              </tr>
              <tr>
                <td className="border px-3 py-2 font-medium border-gray-200">
                  Delivery
                </td>
                <td className="px-4 py-2 border border-gray-200">
                  {order.details.delivery}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-4 py-3 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

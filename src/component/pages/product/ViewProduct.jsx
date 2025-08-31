import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ViewProduct = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-end z-50">
      <div className="bg-white w-96 ">
        <div className="flex items-center justify-between border-b px-4 h-16">
          <h1 className="text-gray-700 text-xl font-semibold">
            Product Details
          </h1>
          <AiFillCloseCircle
            onClick={onClose}
            className="text-amber-600 hover:text-amber-900 text-4xl"
          />
        </div>

        <div className="flex flex-col p-4 gap-2   ">
          <div>
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl border-2 border-amber-200"
              />
            ) : (
              <span className="text-sm text-gray-400">No image</span>
            )}
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-sm text-gray-500">Product ID</p>
              <h4 className="text-24 font-bold">{product.id}</h4>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-sm text-gray-500">Product Name</p>
              <h4 className="text-24 font-bold">{product.name}</h4>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-sm text-gray-500">Price</p>
              <h4 className="text-24 font-bold">{product.price}</h4>
            </div>
            <div className="flex flex-col gap-1 mt-4">
              <p className="text-sm text-gray-500">Product Category</p>
              <h4 className="text-24 font-bold">{product.category}</h4>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-start p-4 w-full">
          <button
            onClick={onClose}
            className="px-4 py-2 w-full rounded bg-amber-600 text-white hover:bg-amber-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;

import React from "react";
import proimg from "../assets/product1.jpg"; // <- make sure extension is correct

const ProductView = () => {
  return (
    <div className="flex flex-col gap-2 mt-48
     items-center min-h-screen">
      <img
        src={proimg}
        alt="Product"
        className="max-w-sm rounded-full shadow-lg w-28"
      />
      <h1 className="text-xl font-bold"> Product Not Found</h1>
      <p>Please check the product ID or browse other items in our catalog.</p>
      <button className="px-4 py-2 text-amber-50 bg-amber-600 rounded hover:bg-amber-700">Add Product</button>
    </div>
  );
};

export default ProductView;

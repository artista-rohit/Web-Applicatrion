import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
 
import ImageUploader from "../../g_component/ImageUploader";

const AddProduct = ({ onAdd, onUpdate, onClose, initialData }) => {
  

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  // Prefill data when editing
  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  // File upload handler
  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file (png, jpg, gif, ...)");
      return;
    }
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("Please choose an image smaller than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setProduct((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProduct((prev) => ({ ...prev, image: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields");
      return;
    }

    if (initialData) {
      // Editing existing product
      onUpdate(product);
      onClose();
    } else {
      // Adding new product — ensure unique id
      const uniqueId = crypto.randomUUID(); // ✅ safer than random numbers

      onAdd({
        id: uniqueId,
        productId: "p-" + uniqueId,
        ...product,
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/33 bg-opacity-40 flex justify-end z-50">
      <div className="w-96 h-screen bg-amber-50 shadow-lg">
        <div className="h-14 bg-gray-200 border-b flex justify-between items-center px-4">
          <h2 className="text-lg font-semibold">
            {initialData ? "Edit Product" : "Add Product"}
          </h2>

          <AiFillCloseCircle
            onClick={onClose}
            className="text-amber-600 hover:text-amber-900 text-4xl cursor-pointer"
          />
        </div>

        <div className="p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            

            {/* // upload image here */}

            <ImageUploader
            image={product.image}
            onChange={handleFileChange}
            onRemove={handleRemoveImage}
            />
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className="p-2 rounded border border-gray-400"
            />
            <input
              type="text"
              name="price"
              placeholder="Product Price"
              value={product.price}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleChange}
              className="p-2 rounded border border-gray-400"
            />

            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="border-2 border-amber-600 rounded hover:bg-amber-200 px-4 py-2 w-full text-amber-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-amber-600 rounded text-amber-100 hover:bg-amber-800 px-4 py-2 w-full"
              >
                {initialData ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

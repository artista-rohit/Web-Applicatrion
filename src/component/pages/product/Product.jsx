import React, { useEffect, useState } from "react";
import { IoFilter, IoSearch } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import AddProduct from "./AddProduct";
import ViewProduct from "./ViewProduct";
import pro_1 from "@/assets/profile-1.png";
import pro_2 from "@/assets/profile-2.png";
import pro_3 from "@/assets/profile-3.png";
import pro_4 from "@/assets/profile-4.png";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // show 5 products per page

  // Dummy data (10 products)
  const dummyProducts = [
    { id: 1, productId: "P1001", name: "Laptop", price: "50000", category: "Electronics", image: pro_1 },
    { id: 2, productId: "P1002", name: "Mobile Phone", price: "20000", category: "Electronics", image: pro_2  },
    { id: 3, productId: "P1003", name: "Shoes", price: "2500", category: "Fashion", image: pro_1  },
    { id: 4, productId: "P1004", name: "Headphones", price: "3000", category: "Electronics", image: pro_3  },
    { id: 5, productId: "P1005", name: "T-Shirt", price: "800", category: "Fashion", image: pro_1  },
    { id: 6, productId: "P1006", name: "Backpack", price: "1500", category: "Accessories", image: pro_4  },
    { id: 7, productId: "P1007", name: "Smart Watch", price: "12000", category: "Electronics", image: pro_1  },
    { id: 8, productId: "P1008", name: "Sunglasses", price: "1800", category: "Fashion", image: pro_3  },
    { id: 9, productId: "P1009", name: "Water Bottle", price: "600", category: "Accessories", image: pro_1  },
    { id: 10, productId: "P1010", name: "Table Fan", price: "2500", category: "Home Appliances", image: pro_4  },
  ];

  // Load products from localStorage OR dummy data
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      setProducts(dummyProducts);
      localStorage.setItem("products", JSON.stringify(dummyProducts));
    }
  }, []);

  // Save products to localStorage whenever products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // Add new product
const handleAddProduct = (newProduct) => {
  const shortId = "P" + Math.floor(1000 + Math.random() * 9000); // Random Pxxxx
  const productWithId = { ...newProduct, id: Date.now(), productId: shortId };
  setProducts([productWithId, ...products]);
};

  // Update product
  const handleUpdateProduct = (updatedProduct) => {
    const updateList = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
    );
    setProducts(updateList);
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // Pagination logic
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-semibold">Products</h1>

      {/* Header / Controls */}
      <div className="flex justify-between bg-gray-100 px-4 py-2 items-center rounded-xl">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 border border-gray-300 px-2 bg-gray-50 rounded">
            <IoSearch fontSize={18} />
            <input
              type="text"
              placeholder="Search ..."
              className="py-1 px-2 text-sm focus:outline-none h-10 w-56"
            />
          </div>
          <button className="flex items-center text-sm text-gray-500 gap-1 border border-gray-300 px-4 bg-gray-50 rounded hover:text-amber-600 hover:border-amber-600">
            <IoFilter />
            Apply Filter
          </button>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setEditingProduct(null);
          }}
          className="px-4 py-2 rounded bg-amber-600 text-amber-50 hover:bg-amber-700"
        >
          Add Product
        </button>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-y-auto max-h-[70vh] rounded-lg">
  <table className="min-w-full text-sm text-gray-700 border border-collapse">
    <thead className="bg-gray-100 sticky top-0 z-10">
      <tr>
        <th className="px-4 py-2 border border-gray-200 text-center">#</th>
        <th className="px-4 py-2 border border-gray-200 text-left">Product ID</th>
        <th className="px-4 py-2 border border-gray-200 text-left">Product Image</th>
        <th className="px-4 py-2 border border-gray-200 text-left">Product</th>
        <th className="px-4 py-2 border border-gray-200 text-left">Price</th>
        <th className="px-4 py-2 border border-gray-200 text-left">Category</th>
        <th className="px-4 py-2 border border-gray-200 text-right">Action</th>
      </tr>
    </thead>
    <tbody  >
      {products.map((p, index) => (
        <tr key={p.id} className="hover:bg-amber-50">
          <td className="px-4 py-2 border border-gray-200 text-center">{index + 1}</td>
          <td className="px-4 py-2 border border-gray-200">{p.productId}</td>
          <td className="px-4 py-2 border border-gray-200">
            {p.image ? (
              <img
                src={p.image}
                alt={p.name}
                className="h-12 w-12 object-cover rounded-full border border-gray-300"
              />
            ) : (
              <span className="text-gray-500 text-sm">No Image</span>
            )}
          </td>
          <td className="px-4 py-2 border border-gray-200">{p.name}</td>
          <td className="px-4 py-2 border border-gray-200">{p.price}</td>
          <td className="px-4 py-2 border border-gray-200">{p.category}</td>
          <td className="px-4 py-2 border border-gray-200 text-right">
                  <div className="flex justify-end items-center gap-2">
                    <button
                      onClick={() => {
                        setEditingProduct(p);
                        setShowForm(true);
                      }}
                      className="text-amber-500 flex gap-1 items-center px-2 py-1 bg-amber-50 rounded hover:text-gray-800"
                    >
                      <MdEdit /> Edit
                    </button>
                    <button
                      onClick={() => setViewProduct(p)}
                      className="text-amber-500 flex gap-1 items-center px-2 py-1 bg-amber-50 rounded hover:text-gray-800"
                    >
                      <LuEye /> View
                    </button>
                    <button
                      className="text-amber-500 flex gap-1 items-center px-2 py-1 bg-amber-50 rounded hover:text-gray-800"
                      onClick={() => handleDelete(p.id)}
                    >
                      <RiDeleteBin6Line /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Add Product Modal */}
      {showForm && (
        <AddProduct
          onAdd={handleAddProduct}
          onUpdate={handleUpdateProduct}
          initialData={editingProduct}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* ViewProduct Modal */}
      {viewProduct && (
        <ViewProduct product={viewProduct} onClose={() => setViewProduct(null)} />
      )}
    </div>
  );
};

export default Product;

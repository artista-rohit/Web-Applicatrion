import { Link } from "react-router-dom";
import pro_img from "@/assets/product1.jpg";
import pro_img1 from "@/assets/product2.webp";

const products = [
  {
    id: 1,
    name: "Macbook M1 Pro 14",
    stock: 341,
    price: 1499,
    thumbnail: pro_img,
  },
  {
    id: 2,
    name: "Samsung Galaxy Buds 2",
    stock: 24,
    price: 399,
    thumbnail: pro_img,
  },
  {
    id: 3,
    name: "Asus Zenbook Pro",
    stock: 56,
    price: 899,
    thumbnail: pro_img1,
  },
  {
    id: 4,
    name: "LG Flex Canvas",
    stock: 98,
    price: 499,
    thumbnail:pro_img,
  },
  {
    id: 5,
    name: "Apple Magic Touchpad",
    stock: 0,
    price: 699,
    thumbnail: pro_img,
  },
  {
    id: 6,
    name: "Nothing Earbuds One",
    stock: 453,
    price: 399,
    thumbnail: pro_img,
  },
];

function getStockColor(stock) {
  if (stock === 0) return "text-red-500";
  if (stock < 50) return "text-orange-500";
  return "text-green-600";
}

function getStockText(stock) {
  if (stock === 0) return "Out of Stock";
  return `${stock} in Stock`;
}

export default function PopularProducts() {
  return (
    <div className="flex  flex-col bg-gray-200 rounded-2xl p-4 gap-2 w-90 mb-12 h-96 ">
      <h6 className=" font-semibold mb-1">Popular Products</h6>
      <div className="flex flex-col overflow-y-auto">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition"
          >
            <div className="flex items-center gap-2">
              {/* Product Thumbnail OR First Letter Fallback */}
              {product.thumbnail ? (
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  {product.name.charAt(0)}
                </div>
              )}

              <div>
                <p className="text-xs font-medium text-gray-800">
                  {product.name}
                </p>
                <span className={`text-xs ${getStockColor(product.stock)}`}>
                  {getStockText(product.stock)}
                </span>
              </div>
            </div>

            <span className="text-xs font-medium text-gray-500">
              ${product.price.toFixed(2)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

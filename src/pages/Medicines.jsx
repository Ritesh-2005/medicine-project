import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

// 🔹 cartId helpers
const getCartId = () => localStorage.getItem("cartId");
const setCartId = (id) => localStorage.setItem("cartId", id);

export default function Medicines() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // 🔹 Fetch PRODUCTS from backend (FIXED)
  useEffect(() => {
    fetch("http://localhost:8080/api/product") // ✅ product endpoint
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // 🔹 EXPLICIT IMAGE MAP (product-based)
  const imageMap = {
    "paracetamol": "/images/paracetamol.jpg",
    "ibuprofen": "/images/ibuprofen.jpg",
    "aspirin": "/images/aspirin.jpg",
    "cetirizine": "/images/cetirizine.jpg",
    "aluminum hydroxide": "/images/aluminum_hydroxide.jpg",
    "bismuth": "/images/bismuth.jpg",
    "boroline": "/images/boroline.jpg",
    "cimetidine": "/images/cimetidine.jpg",
    "dextromethorphan": "/images/dextromethorphan.jpg",
    "dimenhydrinate": "/images/dimenhydrinate.jpg",
    "fexofenadine": "/images/fexofenadine.jpg",
    "guaifenesin": "/images/guaifenesin.jpg",
    "hydrocortisone": "/images/hydrocortisone.jpg",
    "loperamide": "/images/loperamide.jpg",
    "loratadine": "/images/loratadine.jpg",
    "multivitamin": "/images/multivitamin.jpg",
    "omeprazole": "/images/omeprazole.jpg",
    "pseudoephedrine": "/images/pseudoephedrine.jpg",
    "vitamin d": "/images/vitamin_d.jpg",
    "antiseptic cream": "/images/antiseptic_cream.jpg"
  };

  const normalizeName = (name) =>
    name.toLowerCase().trim().replace(/\s+/g, " ");

  const getImagePath = (name) =>
    imageMap[normalizeName(name)] || "/images/default.jpg";

  // 🔹 Search filter (PRODUCT)
  const filtered = products.filter((p) =>
    p.productName.toLowerCase().includes(search.toLowerCase())
  );

  // 🛒 ADD TO CART (BACKEND – PRODUCT BASED)
  const addToCart = async (productId) => {
    const cartId = getCartId();

    const res = await fetch(
      `http://localhost:8080/api/cart/add/${productId}` +
        (cartId ? `?cartId=${cartId}` : ""),
      { method: "POST" }
    );

    const data = await res.json();

    if (!cartId && data.id) {
      setCartId(data.id);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-screen-xl mx-auto min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl mb-8 focus:ring-2 focus:ring-pink-400 shadow-md text-lg"
      />

      {/* 🧱 Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.prodId}
              onClick={() => navigate(`/medicines/${product.prodId}`)}
              className="cursor-pointer relative border p-4 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition bg-white flex flex-col items-center"
            >
              {/* ℹ️ Info Icon */}
              <div className="absolute top-3 right-3 text-purple-500">
                <AiOutlineInfoCircle size={22} />
              </div>

              {/* 🖼️ Product Image */}
              <img
                src={getImagePath(product.productName)}
                alt={product.productName}
                className="h-32 w-32 object-cover mb-4 rounded-xl"
                loading="lazy"
              />

              {/* 📌 Product Name */}
              <h2 className="text-lg font-semibold text-center">
                {product.productName}
              </h2>

              {/* 💰 Price */}
              <p className="text-gray-800 font-bold text-lg mt-1">
                ₹{product.productPrice}
              </p>

              {/* 🛒 Add to Cart */}
              <div
                className="mt-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => addToCart(product.prodId)}
                  className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl font-semibold shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No products found.
        </p>
      )}
    </div>
  );
}

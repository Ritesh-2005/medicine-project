import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  // 🔹 Explicit image map (same as Medicines)
  const imageMap = {
    "paracetamol": "/images/paracetamol.jpg",
    "ibuprofen": "/images/ibuprofen.jpg",
    "aspirin": "/images/aspirin.jpg",
    "cetirizine": "/images/cetirizine.jpg",
    "aluminum hydroxide": "/images/aluminum_hydroxide.jpg",
    "vitamin d": "/images/vitamin_d.jpg",
    "omeprazole": "/images/omeprazole.jpg",
    "loperamide": "/images/loperamide.jpg",
    "loratadine": "/images/loratadine.jpg",
    "pseudoephedrine": "/images/pseudoephedrine.jpg",
    "bismuth": "/images/bismuth.jpg",
    "boroline": "/images/boroline.jpg",
    "cimetidine": "/images/cimetidine.jpg",
    "dextromethorphan": "/images/dextromethorphan.jpg",
    "dimenhydrinate": "/images/dimenhydrinate.jpg",
    "fexofenadine": "/images/fexofenadine.jpg",
    "guaifenesin": "/images/guaifenesin.jpg",
    "hydrocortisone": "/images/hydrocortisone.jpg",
    "multivitamin": "/images/multivitamin.jpg"
  };

  const getImagePath = (name) =>
    imageMap[name.toLowerCase()] || "/images/default.jpg";

  // 🔹 Fetch single product
  useEffect(() => {
    fetch(`http://localhost:8080/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-10">

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-purple-600 hover:underline"
      >
        ← Back to medicines
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <img
          src={getImagePath(product.productName)}
          alt={product.productName}
          className="w-64 h-64 object-cover rounded-xl"
        />

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.productName}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.productDescription}
          </p>

          <p className="text-lg mb-2">
            <b>Category:</b> {product.productCategory}
          </p>

          <p className="text-lg mb-2">
            <b>Available Stock:</b> {product.productQuantity}
          </p>

          <p className="text-2xl font-bold text-green-600 mb-6">
            ₹{product.productPrice}
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

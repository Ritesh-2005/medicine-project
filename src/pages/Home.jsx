import { Link } from "react-router-dom";
import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-50 p-6">
      {/* Top-right Login & Sign Up */}
      <div className="flex justify-end space-x-4 mb-8">
        <Link
          to="/login"
          className="flex items-center space-x-1 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-purple-100 transition duration-300"
        >
          <AiOutlineLogin size={20} className="text-purple-600" />
          <span className="text-purple-700 font-semibold">Login</span>
        </Link>

        <Link
          to="/signup"
          className="flex items-center space-x-1 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-pink-100 transition duration-300"
        >
          <AiOutlineUserAdd size={20} className="text-pink-600" />
          <span className="text-pink-700 font-semibold">Sign Up</span>
        </Link>
      </div>

      {/* Main Heading */}
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-700 mb-4">
          Welcome to MedQuick 🚑
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-700 mb-2">
          Get your medicines delivered in 30 minutes!
        </p>

        {/* Safety line */}
        <p className="text-md md:text-lg text-pink-600 font-semibold mb-6">
          Your safety is our first priority
        </p>

        {/* Shop Now Button */}
        <Link
          to="/medicines"
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-xl shadow-lg text-lg transition duration-300"
        >
          Shop Now
        </Link>
      </div>

      {/* Extra Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold text-purple-700 mb-2">Fast Delivery</h2>
          <p className="text-gray-600">
            Medicines delivered to your doorstep within 30 minutes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold text-purple-700 mb-2">Verified Medicines</h2>
          <p className="text-gray-600">All products are authentic and safe to use.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 hover:scale-105">
          <h2 className="text-xl font-bold text-purple-700 mb-2">24/7 Support</h2>
          <p className="text-gray-600">We are always here to assist you with your orders.</p>
        </div>
      </div>
    </div>
  );
}

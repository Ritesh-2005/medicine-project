import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!agreeTerms) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }
    // Add signup logic here
    alert(`Signed up as ${firstName} ${lastName}`);
    navigate("/medicines"); // redirect to medicines page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-pink-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* First & Last Name */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <AiOutlineMail />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">
              <BsFillTelephoneFill />
            </span>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <span
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter Password"
              className="w-full pr-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="accent-purple-500"
            />
            <label className="text-sm text-gray-600">
              I agree to the <span className="text-purple-500">Terms & Conditions</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

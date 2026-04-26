import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup"; // fixed import capitalization
import Medicines from "./pages/Medicines";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/medicines/:id" element={<ProductDetails />} />  
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Added SignUp route */}
        <Route path="/medicines" element={<Medicines />} />
      </Routes>
    </Router>
  );
}

export default App;

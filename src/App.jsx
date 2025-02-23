import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Sale from "./components/SummerSale";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="font-royal">
      <Router>
        <Sale />
        <Navbar />
        <div className="p-4 border border-transparent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

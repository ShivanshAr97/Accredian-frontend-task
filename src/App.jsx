import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./components/Register";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import New from "./components/New";

function App() {
  const storage = localStorage.getItem("formData")
  console.log(storage);
  return (
    <div className="mx-32">
      {storage&&<New/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/:referredBy?" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataJSON = JSON.stringify(formData);
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const logout = ()=>{
    localStorage.removeItem("formData");
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md my-16">
    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <Link to="/dashboard">
        <button
          type="submit"
          className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Login
        </button>
        </Link>
        <Link to="/register"><p className="text-sm text-blue-500">Register instead</p></Link>
      </div>
    </form>
  </div>
  );
};

export default Login;

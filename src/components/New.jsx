import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const New = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("formData");
    navigate('/')
  };
  return <Button onClick={logout} className="bg-red-500 my-4" label="Logout" />;
};

export default New;

import React from "react";
import Logo from "../logo.png";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="flex justify-between py-4 border-t-2">
      <img className="object-cover h-8"  src={Logo} alt="" />
      <Button className="bg-blue-500" label="Schedule a 1-1 call now"/>
    </div>
  );
};

export default Footer;

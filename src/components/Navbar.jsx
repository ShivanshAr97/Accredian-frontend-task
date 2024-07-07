import React from "react";
import Logo from "../logo.png"
import Button from "./Button";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-6 align-middle">
        <img src={Logo} width="100px" alt="" />
        <Button className="bg-blue-600 text-base text-white" label="Courses"/>
      </div>
        <div className="">
            <ul className="gap-6 flex align-middle items-center">
                <li>Refer & Earn</li>
                <li>Resourses</li>
                <li>About Us</li>
                <li>Login</li>
                <Button className="bg-blue-600 text-base text-white" label="Try for free"/>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;

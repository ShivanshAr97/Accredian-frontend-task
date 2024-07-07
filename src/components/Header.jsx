import React from "react";
import Nav from "./Nav";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="-mx-32 text-center py-2 mb-4 font-semibold bg-blue-200">
        Navigate your ideal career path with tailored expert advice{" "}
        <span className="text-blue-800 mx-4"> Contact Expert</span>
      </div>
      <Navbar />
      <div className="border border-black-4 -mx-32 my-4"></div>
      <Nav />
    </>
  );
};

export default Header;

import React from "react";
import Table from "./Table";
import Side from "./Side";
import Faq from "./Faq";
import Hero from "./Hero";
import Button from "./Button";
import Header from "./Header";
import { Link } from 'react-router-dom'

const Home = () => {
  const storage = localStorage.getItem("formData")
  return (
    <>
    <Header />
    <Hero/>
      <div className="mt-10 grid grid-cols-3">
        <div className="">
          <Side />
        </div>
        <div className="col-span-2">
          <Table />
        </div>
      </div>
      {storage?<Link to="/dashboard"><div className="flex justify-center"><Button label="Refer Now"/></div></Link>:<Link to="/login"><div className="flex justify-center"><Button className="bg-green-400" label="Refer Now"/></div></Link>}
      
      <Faq />
    </>
  );
};

export default Home;

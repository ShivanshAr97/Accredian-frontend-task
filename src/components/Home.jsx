import React from "react";
import Table from "./Table";
import Side from "./Side";
import Faq from "./Faq";
import Hero from "./Hero";
import Button from "./Button";
import Header from "./Header";

const Home = () => {
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
      <div className="flex justify-center"><Button label="Refer Now"/></div>
      <Faq />
    </>
  );
};

export default Home;

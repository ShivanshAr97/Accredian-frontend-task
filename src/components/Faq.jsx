import React from "react";
import SideFaq from "./SideFaq";
import Content from "./Content";

const Faq = () => {
  return (
    <div className="my-8">
      <h1 className="text-2xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className=" my-8 flex">
        <SideFaq />
        <Content />
      </div>
    </div>
  );
};

export default Faq;

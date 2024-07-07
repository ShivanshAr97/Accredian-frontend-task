import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import emailjs from "@emailjs/browser"

const Product = () => {
  let { search } = useLocation();
  let queryParams = new URLSearchParams(search);
  let referredBy = queryParams.get("referredBy");
  let storage = localStorage.getItem("formData");
  let a = JSON.parse(storage);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      axios
        .get(`http://localhost:3000/api/auth/incVisitPage?name=${referredBy}`)
        .then((response) => {
          console.log(response.data);
          sessionStorage.setItem("visited", "yes");
        })
        .catch((error) =>
          console.error("Error updating visit page count:", error)
        );
    } else {
      axios
        .get(`http://localhost:3000/api/auth/incNormalPage?name=${referredBy}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) =>
          console.error("Error updating normal page count:", error)
        );
    }
  }, [referredBy]);

  const sendEmail = (e) => {
    e.preventDefault();
    const serviceId = "service_vs86erb";
    const templateId = "template_19vu27w";
    const publicKey = "W87dSy6BZ3XZtQo5m";
    const templateParams = {
      to_email:referredBy,
      to_name: referredBy,
      referred: a.name,
      product:'Product1'
    };

    emailjs.send(serviceId,templateId,templateParams,publicKey)
    .then((resp)=>{
      console.log("Email sent sucessfully",resp);
    })
    .catch((err)=>{
      console.log(err);
    })
    console.log(a.name, a.email, referredBy);
  };

  return (
    <div>
      <h2 className="text-4xl">Product Page</h2>
      <div className="flex">
        <div className="border m-4 px-4">
          <h1 className="font-semibold text-center">Product 1</h1>
          <img
            className="object-cover h-32 w-32 mx-auto"
            src="https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <Button onClick={sendEmail} className="mx-8" label="Enroll now" />
        </div>
        <div className="border m-4 px-4">
          <h1 className="font-semibold text-center">Product 2</h1>
          <img
            className="object-cover h-32 w-32  mx-auto"
            src="https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <Button onClick={sendEmail} className="mx-8" label="Enroll now" />
        </div>
        <div className="border m-4 px-4">
          <h1 className="font-semibold text-center">Product 3</h1>
          <img
            className="object-cover h-32 w-32 mx-auto"
            src="https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <Button onClick={sendEmail} className="mx-8" label="Enroll now" />
        </div>
        <div className="border m-4 px-4">
          <h1 className="font-semibold text-center">Product 4</h1>
          <img
            className="object-cover h-32 w-32 mx-auto"
            src="https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <Button onClick={sendEmail} className="mx-8" label="Enroll now" />
        </div>
        <div className="border m-4 px-4">
          <h1 className="font-semibold text-center">Product 5</h1>
          <img
            className="object-cover h-32 w-32 mx-auto"
            src="https://images.pexels.com/photos/4041271/pexels-photo-4041271.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <p>Lorem ipsum dolor sit amet.</p>
          <Button onClick={sendEmail} className="mx-8" label="Enroll now" />
        </div>
      </div>
    </div>
  );
};

export default Product;

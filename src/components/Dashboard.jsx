import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const Dashboard = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [normalPageCount, setNormalPageCount] = useState(0);
  const [data, setData] = useState([]);
  const [leng, setLeng] = useState(0);

  const a = localStorage.getItem("formData");
  const c = JSON.parse(a);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/auth/names?name=${c.name}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLeng(response.data.length);
      });
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      axios
        .get(`http://localhost:3000/api/auth/incVisitPage?name=${c.name}`)
        .then((response) => {
          console.log(response.data);
          setVisitCount(response.data.incVisitPage);
          setNormalPageCount(response.data.incNormalPage);
          sessionStorage.setItem("visited", "yes");
        })
        .catch((error) =>
          console.error("Error updating visit page count:", error)
        );
    } else {
      axios
        .get(`http://localhost:3000/api/auth/incNormalPage?name=${c.name}`)
        .then((response) => {
          console.log(response.data);
          setVisitCount(response.data.incVisitPage);
          setNormalPageCount(response.data.incNormalPage);
        })
        .catch((error) =>
          console.error("Error updating normal page count:", error)
        );
    }
  }, [c.name]);

  const d = window.location.hostname;

  const referralLink1 = `${d}/register/referredBy=${c.name}`;
  const referralLink2 = `${d}/products/?referredBy=${c.name}`;

  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold my-4">Referral Dashboard</h1>
      <div className="flex gap-10 ">
        <input
          className="border-2 p-1 rounded-md w-[40%]"
          value={referralLink1}
          disabled
        />
        <Button
          className="bg-blue-500"
          onClick={() => {
            navigator.clipboard.writeText(referralLink1);
          }}
          label="Copy"
        />
      </div>

      <div className="flex gap-10 my-4">
        <input
          className="border-2 p-1 rounded-md w-[40%]"
          value={referralLink2}
          disabled
        />
        <Button
          className="bg-blue-500"
          onClick={() => {
            navigator.clipboard.writeText(referralLink2);
          }}
          label="Copy"
        />
      </div>
      <div className="my-4 text-xl">
        <div className="grid grid-cols-2 my-2 border">
          <div className="border p-2">
            Unique no. of times the link has been clicked:
          </div>
          <div className="font-bold p-2 border text-center">{visitCount}</div>
          <div className="border p-2">New accounts with your referral</div>
          <div className="font-bold p-2 text-center border">{leng}</div>
          <div className="border p-2">Total no. of referral page clicks</div>
          <div className="font-bold p-2 text-center border">
            {normalPageCount}
          </div>
        </div>

        <p className="text-xl font-semibold py-2">People referred </p>
        {data.map((d, index) => (
          <li className="list-none" key={index}>
            {d}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

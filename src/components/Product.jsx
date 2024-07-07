import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const Product = () => {
  let { productId } = useParams();
  let { search } = useLocation();
  let queryParams = new URLSearchParams(search);
  let referredBy = queryParams.get("referredBy");

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
        .get(
          `http://localhost:3000/api/auth/incNormalPage?name=${referredBy}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) =>
          console.error("Error updating normal page count:", error)
        );
    }
  }, [referredBy]); // Ensure referredBy is listed as a dependency

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {productId}</p>
      <p>Referrer Name: {referredBy}</p>
    </div>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/products/${id}`)
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((res) => console.log(res));
  }, []);

  return (
    <>
      <Header />
      <div className="top_container">
        <div className="main_container">
          <div className="imag_tag">
            <img src={details.img} alt="imag" />
          </div>

          <div className="detail">
            <h4>Product Name: {details.title}</h4>
            <h4>Brand: {details.brand}</h4>
            <h4>Price: INR {details.price}</h4>
            <h4>Rating: {details.rating} Star</h4>
            <button className="cart_btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Redux/cart/Actions";
import Header from "../Header/Header";
import "./ProductDetails.css";
import Footer from "../footer/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //
    const getProducts = async () => {
      const res = await fetch(
        `https://product-server-app.herokuapp.com/products/${id}`
      );
      const resData = await res.json();
      setProducts(resData);
    };
    getProducts();
  }, []);

  const addProd = (products) => {
    dispatch(addToCart(products));
  };

  return (
    <>
      <Header />
      <div className="top_container">
        <div className="main_container">
          <div className="imag_tag">
            <img src={products.img} alt="imag" />
          </div>

          <div className="detail">
            <h4>Product Name: {products.title}</h4>
            <h4>Brand: {products.brand}</h4>
            <h4>Price: INR {products.price}</h4>
            <h4 className="rat">Rating: {products.rating} Star</h4>
            <Button
              variant="outlined"
              className="cart_btn"
              onClick={() => addProd(products)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;

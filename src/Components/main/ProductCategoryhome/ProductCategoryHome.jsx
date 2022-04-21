import React, { useEffect } from "react";
import "./ProductCategoryHome.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../../../Redux/products/Actions";
import { Link, useParams } from "react-router-dom";

const ProductCategoryHome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  return (
    <>
      <h2 className="shop_category">SHOP BY CATEGORY</h2>
      <div className="container">
        {data.map((catData) => {
          return (
            <div className="product_cards">
              <img src={catData.img} alt="category" />
              <p>{catData.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryHome;

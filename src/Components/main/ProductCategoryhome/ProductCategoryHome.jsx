import React, { useEffect } from "react";
import "./ProductCategoryHome.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCat } from "../../../Redux/products/Actions";
import { Link } from "react-router-dom";

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
            <Link to="/products" className="title_cat">
              <div className="product_cards">
                <img src={catData.img} alt="category" />
                <p>{catData.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductCategoryHome;

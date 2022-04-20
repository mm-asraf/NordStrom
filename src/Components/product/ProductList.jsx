import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  // products states
  const [price, setPrice] = useState("");

  //   dispatching products data
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  return (
    <div>
      <div className="container">
        {data.map((d) => {
          return (
            <div className="product_cards">
              <img src={d.img} alt="product_img" />
              <p>{d.title}</p>
              <p>{d.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

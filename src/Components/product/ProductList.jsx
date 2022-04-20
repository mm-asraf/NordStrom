import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
import "./ProductList.css";
import ProductSidebar from "./ProductSidebar";

const ProductList = () => {
  const dispatch = useDispatch();

  // products states
  const [price, setPrice] = useState("");

  //   dispatching products data
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  // sort by price
  const handleprice = useEffect(() => {
    const sortbyprice = data.sort((a, b) => {
      if (price === "high to low") {
        return b.price - a.price;
      } else if (price === "low to high") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
    setPrice(sortbyprice);
  }, [price]);

  return (
    <div>
      <ProductSidebar handleprice={handleprice} />
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

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
import ProductSidebar from "./ProductSidebar";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useSelector((state) => state.productData.products);
  const isloading = useSelector((state) => state.productData.isloading);
  console.log(data);

  //   useEffect(() => {
  //     setList(data);
  //   }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProductSidebar data={data} />
    </div>
  );
};

export default Products;

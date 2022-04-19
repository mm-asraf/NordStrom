import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Actions";
import ProductCategoryHome from "../main/ProductCategoryhome/ProductCategoryHome";

const Products = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);

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
      <ProductCategoryHome dbData={data} />
    </div>
  );
};

export default Products;

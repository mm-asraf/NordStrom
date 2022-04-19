import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/Actions";

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
      {list.map((d) => {
        return <div>{d.title}</div>;
      })}
    </div>
  );
};

export default Products;

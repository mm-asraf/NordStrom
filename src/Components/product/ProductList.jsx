import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";

const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  return (
    <div>
      <div pro_cards>
        {data.map((d) => {
          return (
            <div>
              <img src={d.img} alt="product_img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;

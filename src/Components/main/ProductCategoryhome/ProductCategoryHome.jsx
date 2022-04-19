import React from "react";
import "./ProductCategoryHome.css";

const ProductCategoryHome = ({ dbData }) => {
  return (
    <div>
      {dbData.map((d) => {
        return <div>{d.title}</div>;
      })}
    </div>
  );
};

export default ProductCategoryHome;

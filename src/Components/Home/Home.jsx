import React, { useEffect } from "react";
import Header from "../Header/Header";
import ProductCategoryHome from "../main/ProductCategoryhome/ProductCategoryHome";
import Section from "../main/Section/Section";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductCategoryHome />
      <Section />
    </div>
  );
};

export default Home;

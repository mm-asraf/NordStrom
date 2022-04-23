import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import ProductCategoryHome from "../main/ProductCategoryhome/ProductCategoryHome";
import Section from "../main/Section/Section";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductCategoryHome />
      {/* <Section /> */}
      <Footer />
    </div>
  );
};

export default Home;

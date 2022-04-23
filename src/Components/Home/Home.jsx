import React, { useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../Header/Header";
import ProductCategoryHome from "../main/ProductCategoryhome/ProductCategoryHome";
import ProductSlide from "../main/ProductSlidehome/ProductSlide";
import Section from "../main/Section/Section";

const Home = () => {
  return (
    <div>
      <Header />
      <ProductCategoryHome />
      <Section />
      <ProductSlide />
      <Footer />
    </div>
  );
};

export default Home;

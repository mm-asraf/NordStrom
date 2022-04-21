import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import ProductCategoryHome from "./Components/main/ProductCategoryhome/ProductCategoryHome";

import ProductSidebar from "./Components/product/ProductSidebar";
import ProductDetails from "./Components/product/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/Products" element={<ProductSidebar />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

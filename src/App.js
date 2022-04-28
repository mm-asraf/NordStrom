import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductSidebar from "./Components/product/ProductSidebar";
import ProductDetails from "./Components/product/ProductDetails";
import Home from "./Components/Home/Home";
import Cart from "./Components/product/Cart";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/products/:id/cart" element={<Cart />}></Route>
        <Route path="/Products" element={<ProductSidebar />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

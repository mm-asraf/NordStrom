import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ProductCategoryHome from "./Components/main/ProductCategoryhome/ProductCategoryHome";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCategoryHome />
      {/* <Products /> */}
    </div>
  );
}

export default App;

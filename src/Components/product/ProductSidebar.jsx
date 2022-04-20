import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "./ProductSidebar.css";
import "./script";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
const ProductSidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [price, setPrice] = useState("");
  const [brands, setBrands] = useState("");

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  // sort by price
  useEffect(() => {
    const sortbyprice = data.sort((a, b) => {
      if (price === "high to low") {
        return b.price - a.price;
      } else if (price === "low to high") {
        return a.price - b.price;
      } else {
        return 0;
      }
    });
    setPrice(sortbyprice);
  }, [price]);

  // sort by using filter method
  useEffect(() => {
    const filterbyBrand = data.filter((d) => {
      return d.brand === brands;
    });
    setBrands(filterbyBrand);
  }, []);
  console.log(brands);

  return (
    <div>
      <div className="main_prod_container">
        <div className=".filter_container">
          <div className="filter-cont">
            <div className="filter">Filter By</div>
            <div className="clear-all">
              <u>CLEAR ALL</u>
            </div>
            <div className="clear"></div>
          </div>

          {/* dropdowns */}
          <div className="dropdowns">
            <div className="line1"></div>
            <button className="collapsible">
              <b>PRICE</b>
            </button>
            <div className="content">
              <button onClick={() => setPrice("low to high")}>
                Low to High
              </button>
              <br />
              <button onClick={() => setPrice("high to low")}>
                High to Low
              </button>
              <br />
              <button>Between ₹1000 and ₹10000</button>
              <br />
              <button> Between ₹10000 and ₹50000</button>
              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Brand</b>
            </button>
            <div className="content">
              <button onClick={() => setBrands("NIKE")}>NIKE</button>

              <button>Fear of God Essentials</button>

              <button>7 Diamonds</button>

              <button>adidas</button>

              <button>Alden</button>

              <button>Acne Studios</button>

              <button>4SDesigns</button>

              <button>ZELLA</button>

              <button>NATORI</button>

              <button>Dolce Vita</button>

              <button>NEOUS</button>

              <button>TREASURE & BOND</button>

              <button>ZELLA GIR</button>

              <button>THE NORTH FACE</button>

              <button>NATIVE SHOES</button>

              <button>CROCS</button>

              <button>CONVERSE</button>
              <br />

              <button>KEEN</button>
              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Category</b>
            </button>
            <div className="content">
              <button>Men</button>
              <button>Women</button>
              <button>Kids</button>
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Rating</b>
            </button>
            <div className="content">
              <button>5 star</button>
              <button>4 star</button>
              <button>3 Star</button>
              <button>Between 2 & 4 Star</button>
              <button>Between 3 & 5 Star</button>

              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Type</b>
            </button>
            <div className="content">
              <button>Clothing</button>
              <button>Shoes</button>
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>By Gender</b>
            </button>
            <div className="content">
              <button>Male</button>
              <button>Female</button>
              <button>Kid Boys</button>
              <button>Kid Girls</button>
            </div>

            <div className="line2"></div>
          </div>
        </div>

        {/* product */}
        {/* <ProductList /> */}
        <div className="test">
          {/* <ProductList /> */}
          <div className="container">
            {data.map((d) => {
              return (
                <div className="product_cards">
                  <img src={d.img} alt="product_img" />
                  <p>{d.title}</p>
                  <p>{d.price}</p>
                  <p>{d.brand}</p>
                  <p>Rating {d.rating} Star</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;

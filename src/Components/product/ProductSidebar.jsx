import React, { useEffect, useState } from "react";
import "./ProductSidebar.css";
import "./script";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const ProductSidebar = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(data);

  useEffect(() => {
    setDatas(data);
  }, [data]);

  // filters function
  const filterResbyBrand = (cat) => {
    let setItem = data.filter((d) => {
      return d.brand === cat;
    });
    setDatas(setItem);
  };

  const filterResbyCategoryId = (cat) => {
    let setItem = data.filter((d) => {
      return d.categoryid === cat;
    });
    setDatas(setItem);
  };

  const filterResbyProductType = (cat) => {
    let setItem = data.filter((d) => {
      return d.product_type === cat;
    });
    setDatas(setItem);
  };

  const filterResbygender = (cat) => {
    let setItem = data.filter((d) => {
      return d.gender === cat;
    });
    setDatas(setItem);
  };

  const filterResbyRating = (cat) => {
    let setItem = data.filter((d) => {
      return d.rating === cat;
    });
    setDatas(setItem);
  };

  const all = (cat) => {
    let setItem = data.filter((d) => {
      return d;
    });
    setDatas(setItem);
  };

  // sort by price
  useEffect(() => {
    const sortbyprice = datas.sort((a, b) => {
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

  return (
    <div>
      <Header />
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
              <button onClick={() => all()}>All Products</button>

              <button onClick={() => setPrice("low to high")}>
                Low to High
              </button>
              <br />
              <button onClick={() => setPrice("high to low")}>
                High to Low
              </button>
              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Brand</b>
            </button>
            <div className="content">
              <button onClick={() => filterResbyBrand("NIKE")}>NIKE</button>

              <button
                onClick={() => filterResbyBrand("Fear of God Essentials")}
              >
                Fear of God Essentials
              </button>

              <button onClick={() => filterResbyBrand("7 Diamonds")}>
                7 Diamonds
              </button>

              <button onClick={() => filterResbyBrand("adidas")}>adidas</button>

              <button onClick={() => filterResbyBrand("Alden")}>Alden</button>

              <button onClick={() => filterResbyBrand("Acne Studios")}>
                Acne Studios
              </button>

              <button onClick={() => filterResbyBrand("4SDesigns")}>
                4SDesigns
              </button>

              <button onClick={() => filterResbyBrand("ZELLA")}>ZELLA</button>

              <button onClick={() => filterResbyBrand("NATORI")}>NATORI</button>

              <button onClick={() => filterResbyBrand("Dolce Vita")}>
                Dolce Vita
              </button>

              <button onClick={() => filterResbyBrand("NEOUS")}>NEOUS</button>

              <button onClick={() => filterResbyBrand("TREASURE & BOND")}>
                TREASURE & BOND
              </button>

              <button onClick={() => filterResbyBrand("ZELLA GIRL")}>
                ZELLA GIRL
              </button>

              <button onClick={() => filterResbyBrand("THE NORTH FACE")}>
                THE NORTH FACE
              </button>

              <button onClick={() => filterResbyBrand("NATIVE SHOES")}>
                NATIVE SHOES
              </button>

              <button onClick={() => filterResbyBrand("CROCS™")}>CROCS</button>

              <button onClick={() => filterResbyBrand("CONVERSE")}>
                CONVERSE
              </button>
              <br />

              <button onClick={() => filterResbyBrand("KEEN")}>KEEN</button>
              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Category</b>
            </button>
            <div className="content">
              <button onClick={() => filterResbyCategoryId("men")}>Men</button>
              <button onClick={() => filterResbyCategoryId("women")}>
                Women
              </button>
              <button onClick={() => filterResbyCategoryId("kids")}>
                Kids
              </button>
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Rating</b>
            </button>
            <div className="content">
              <button onClick={() => filterResbyRating(5)}>5 star</button>
              <button onClick={() => filterResbyRating(4)}>4 star</button>
              <button onClick={() => filterResbyRating(3)}>3 Star</button>
              <button onClick={() => filterResbyRating(3.5)}>3.5</button>
              <button onClick={() => filterResbyRating(4.5)}>4.5</button>

              <br />
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>Type</b>
            </button>
            <div className="content">
              <button onClick={() => filterResbyProductType("clothing")}>
                Clothing
              </button>
              <button onClick={() => filterResbyProductType("shoes")}>
                Shoes
              </button>
            </div>
            <div className="line2"></div>
            <button className="collapsible">
              <b>By Gender</b>
            </button>
            <div className="content">
              <button onClick={() => filterResbygender("boys")}>Male</button>
              <button onClick={() => filterResbygender("girls")}>Female</button>
              <button onClick={() => filterResbygender("male")}>
                Kid Boys
              </button>
              <button onClick={() => filterResbygender("female")}>
                Kid Girls
              </button>
            </div>

            <div className="line2"></div>
          </div>
        </div>

        {/* product */}

        <div className="test">
          <div className="container1">
            {datas.map((d, i) => {
              return (
                <div className="product_cards1" key={i}>
                  <img src={d.img} alt="product_img1" />
                  <p>{d.title}</p>
                  <p>{d.price}</p>
                  <p>{d.brand}</p>
                  <p>Rating {d.rating} Star</p>
                  <Link to={`/products/${d.id}`}>showdetails</Link>
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

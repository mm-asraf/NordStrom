import React, { useEffect, useState } from "react";
import "./ProductSidebar.css";
import "../../App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../Redux/products/Actions";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import HeaderSide from "../Header/HeaderSide";
import useCollapse from "react-collapsed";

const Col = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState("");
  const [datas, setDatas] = useState([]);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const data = useSelector((state) => state.productData.products);
  console.log(datas);

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

  // filter by search
  const filterSearch = (event) => {
    const val = event.target.value.toLowerCase();
    const filterbyName = data.filter((product) =>
      `${product.title} ${product.brand} ${product.categoryId}`
        .toLowerCase()
        .includes(val)
    );
    setDatas(filterbyName);
  };

  return (
    <div>
      <HeaderSide />
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
          {/* filter functions  */}
          <div className="dropdowns">
            <div className="collapsible">
              <div className="header" {...getToggleProps()}>
                All Filter Functions
                {/* {isExpanded ? "Collapse" : "Expand"} */}
              </div>
              <div {...getCollapseProps()}>
                <div className="content">
                  <button onClick={() => all()}>All Products</button>

                  {/* filter by price */}
                  <h4 className="fl-p">Filter by price</h4>
                  <button onClick={() => setPrice("low to high")}>
                    Low to High
                  </button>

                  <button onClick={() => setPrice("high to low")}>
                    High to Low
                  </button>

                  {/* filter by brands */}
                  <h4 className="fl-b">Filter by Brands</h4>
                  <button onClick={() => filterResbyBrand("NIKE")}>NIKE</button>

                  <button
                    onClick={() => filterResbyBrand("Fear of God Essentials")}
                  >
                    Fear of God Essentials
                  </button>

                  <button onClick={() => filterResbyBrand("7 Diamonds")}>
                    7 Diamonds
                  </button>

                  <button onClick={() => filterResbyBrand("adidas")}>
                    adidas
                  </button>

                  <button onClick={() => filterResbyBrand("Alden")}>
                    Alden
                  </button>

                  <button onClick={() => filterResbyBrand("Acne Studios")}>
                    Acne Studios
                  </button>

                  <button onClick={() => filterResbyBrand("4SDesigns")}>
                    4SDesigns
                  </button>

                  <button onClick={() => filterResbyBrand("ZELLA")}>
                    ZELLA
                  </button>

                  <button onClick={() => filterResbyBrand("NATORI")}>
                    NATORI
                  </button>

                  <button onClick={() => filterResbyBrand("Dolce Vita")}>
                    Dolce Vita
                  </button>

                  <button onClick={() => filterResbyBrand("NEOUS")}>
                    NEOUS
                  </button>

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

                  <button onClick={() => filterResbyBrand("CROCS™")}>
                    CROCS
                  </button>

                  <button onClick={() => filterResbyBrand("CONVERSE")}>
                    CONVERSE
                  </button>

                  <button onClick={() => filterResbyBrand("KEEN")}>KEEN</button>

                  {/* filter by category */}
                  <h4 className="fl-cat">Filter by Category</h4>

                  <button onClick={() => filterResbyCategoryId("men")}>
                    Men
                  </button>
                  <button onClick={() => filterResbyCategoryId("women")}>
                    Women
                  </button>
                  <button onClick={() => filterResbyCategoryId("kids")}>
                    Kids
                  </button>

                  {/* filter by Ratings */}
                  <h4 className="fl-r">Filter by Ratings</h4>

                  <button onClick={() => filterResbyRating(5)}>5 star</button>
                  <button onClick={() => filterResbyRating(4)}>4 star</button>
                  <button onClick={() => filterResbyRating(3)}>3 Star</button>
                  <button onClick={() => filterResbyRating(3.5)}>3.5</button>
                  <button onClick={() => filterResbyRating(4.5)}>4.5</button>

                  {/* filter by product Type */}
                  <h4 className="fl-pc">Filter by Product Category</h4>

                  <button onClick={() => filterResbyProductType("clothing")}>
                    Clothing
                  </button>
                  <button onClick={() => filterResbyProductType("shoes")}>
                    Shoes
                  </button>

                  {/* filter by gender */}
                  <h4 className="fl-k">Filter by Category Kids</h4>

                  <button onClick={() => filterResbygender("boys")}>
                    Boys
                  </button>
                  <button onClick={() => filterResbygender("girls")}>
                    Girls
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product */}

        <div className="test">
          <div className="inp_search">
            <input
              type="text"
              onInput={filterSearch}
              className="search-box-2"
              placeholder="Search Your products by brand,category and name........"
            />
          </div>
          <div className="container1">
            {datas.map((d, i) => {
              return (
                <div className="product_cards1" key={i}>
                  <img src={d.img} alt="product_img1" />
                  <p>{d.title}</p>
                  <p>{d.price}</p>
                  <p>{d.brand}</p>
                  <p>Rating {d.rating} Star</p>
                  <Button className="prod_btn" variant="outlined">
                    <Link to={`/products/${d.id}`}>showdetails</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col;

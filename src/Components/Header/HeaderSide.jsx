import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const HeaderSide = () => {
  const cartD = useSelector((state) => state.cart);

  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  return (
    <div>
      {/* top header */}
      <div className="top_header">
        <div className="center">
          <h4>Shipping outside of the U.S. or Canada? </h4>
          <p>Learn About International Shipping</p>
        </div>
        <div className="top_left">
          <img src="https://n.nordstrommedia.com/alias/IN.gif" alt="india" />

          <p>India</p>
        </div>
      </div>

      {/* mid header */}

      <div className="mid_header">
        <div className="mid_left">
          <Link to="/">
            <img
              src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg"
              alt="nordstrom"
              width="198px"
              height="28px"
              className="nord"
            />
          </Link>
        </div>

        <div className="mid_right">
          <div className="signin">
            <Button varient="outline">Sign In</Button>
          </div>

          <div className="cart_bag">
            <Link className="sale" to="cart">
              cart({cartD.length})
            </Link>
            {/* <CardTravelIcon /> */}
          </div>
        </div>
      </div>

      {/* Nav header */}

      <div className="nav_header">
        <li>
          <Link className="sale" to="/products">
            Sale
          </Link>
        </li>
        {/* <li>Sale</li> */}
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Brands</li>
        <li>Young Adult</li>
        <li>Activewear</li>
        <li>Home</li>
        <li>Beauty</li>
        <li>Beauty</li>
        <li>Designer</li>
        <li>Gifts</li>
      </div>

      <div className="sign_btn">
        <h3>Shop what you love-faster and easier</h3>
        <button>Sign In or Create Account</button>
      </div>
    </div>
  );
};

export default HeaderSide;

import React from "react";
import "./Header.css";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
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
          <img
            src="https://n.nordstrommedia.com/alias/nordstrom-logo.svg"
            alt="nordstrom"
            width="198px"
            height="28px"
          />
        </div>
        <div className="mid_input">
          <SearchIcon fontSize="20px" className="searchicon" />
          <input type="text" placeholder="Search for products or brands" />
        </div>

        <div className="mid_right">
          <div className="signin">SignIn</div>

          <div className="cart_bag">
            <CardTravelIcon />
          </div>
        </div>
      </div>

      {/* Nav header */}

      <div className="nav_header">
        <li>Sale</li>
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

export default Header;

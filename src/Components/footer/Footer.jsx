import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="foot-f">
        <div className="services">
          <li className="first">Customer services</li>
          <li>Contact Us</li>
          <li>Order Status</li>
          <li>Return Policy & Exchanges</li>
          <li>Gift Cards</li>
          <li>FAQ</li>
          <li>Product Recalls</li>
        </div>

        <div className="services">
          <li className="first">About Us</li>
          <li>Careers</li>
          <li>Corporate Social Responsibility</li>
          <li>Diversity, Inclusion & Belonging</li>
          <li>Get Email Updates.</li>
          <li>Nordstrom Blog</li>
          <li>Nordy Podcast</li>
        </div>

        <div className="services">
          <li className="first">Stores and Services</li>
          <li>Find a Store</li>
          <li>Free Style Help</li>
          <li>Alterations & Tailoring</li>
          <li>Virtual Events</li>
          <li>Nordstrom Local</li>
        </div>

        <div className="services">
          <li className="first">Nordstrom Cards & Rewards</li>
          <li>The Nordy Club Rewards</li>
          <li>Pay My Bill</li>
          <li>Manage My Nordstrom Card</li>
        </div>

        <div className="services">
          <li className="first">Nordstrom Inc.</li>
          <li>Nordstrom Canada</li>
          <li>Trunk Club</li>
          <li>Investor Relations</li>
          <li>Press Releases</li>
        </div>
      </div>
      <div className="icon_div">
        <h4>Connect With Our Social Media's</h4>
        <div className="div_icon">
          <InstagramIcon className="icon" />
          <FacebookIcon className="icon" />
          <PinterestIcon className="icon" />
          <TwitterIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

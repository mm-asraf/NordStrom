import React from "react";
import "./ProductSidebar.css";
import "./script";
const ProductSidebar = () => {
  return (
    <div>
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
          <input type="checkbox" className="price1" name="price1" />
          <label for="price1">Low to High</label>
          <br />

          <input type="checkbox" className="price2" name="price2" />
          <label for="price2">
            High to Low
            <br />
          </label>
          <br />
          <input type="checkbox" className="price3" name="price3" />
          <label for="price3">
            Between ₹1000 and ₹10000
            <br />
          </label>
          <br />
          <input type="checkbox" className="price4" name="price4" />
          <label for="price4">
            Between ₹10000 and ₹50000
            <br />
          </label>
          <br />
        </div>
        <div className="line2"></div>
        <button className="collapsible">
          <b>Brand</b>
        </button>
        <div className="content">
          <input type="checkbox" className="brand-type1" name="brand-type1" />
          <label for="brand-type1">NIKE</label>
          <br />
          <input type="checkbox" className="brand-type2" name="brand-type2" />
          <label for="brand-type2">Fear of God Essentials</label>
          <br />
          <input type="checkbox" className="brand-type3" name="brand-type3" />
          <label for="brand-type3">7 Diamonds</label>
          <br />
          <input type="checkbox" className="brand-type4" name="brand-type4" />
          <label for="brand-type4">adidas</label>
          <br />
          <input type="checkbox" className="brand-type5" name="brand-type5" />
          <label for="brand-type5">Alden</label>
          <br />
          <input type="checkbox" className="brand-type6" name="brand-type6" />
          <label for="brand-type6">Acne Studios</label>
          <br />
          <input type="checkbox" className="brand-type7" name="brand-type7" />
          <label for="brand-type7">4SDesigns</label>
          <br />
          <input type="checkbox" className="brand-type8" name="brand-type8" />
          <label for="brand-type8">ZELLA</label>
          <br />
          <input type="checkbox" className="brand-type9" name="brand-type9" />
          <label for="brand-type9">NATORI</label>
          <br />
          <input type="checkbox" className="brand-type10" name="brand-type10" />
          <label for="brand-type10">Dolce Vita</label>
          <br />
          <input type="checkbox" className="brand-type11" name="brand-type11" />
          <label for="brand-type11">NEOUS</label>
          <br />
          <input type="checkbox" className="brand-type12" name="brand-type12" />
          <label for="brand-type12">TREASURE & BOND</label>
          <br />
          <input type="checkbox" className="brand-type13" name="brand-type13" />
          <label for="brand-type13">ZELLA GIRL</label>
          <br />
          <input type="checkbox" className="brand-type14" name="brand-type14" />
          <label for="brand-type14">THE NORTH FACE</label>
          <br />
          <input type="checkbox" className="brand-type15" name="brand-type15" />
          <label for="brand-type15">NATIVE SHOES</label>
          <br />
          <input type="checkbox" className="brand-type16" name="brand-type16" />
          <label for="brand-type16">CROCS</label>
          <br />
          <input type="checkbox" className="brand-type17" name="brand-type17" />
          <label for="brand-type17">CONVERSE</label>
          <br />
          <input type="checkbox" className="brand-type18" name="brand-type18" />
          <label for="brand-type18">KEEN</label>
          <br />
        </div>
        <div className="line2"></div>
        <button className="collapsible">
          <b>Category</b>
        </button>
        <div className="content">
          <input type="checkbox" className="type1" name="type1" />
          <label for="type1">Men</label>
          <br />
          <input type="checkbox" className="type2" name="type2" />
          <label for="type2">Women</label>
          <br />
          <input type="checkbox" className="type3" name="type3" />
          <label for="type3">Kids</label>
          <br />
        </div>
        <div className="line2"></div>
        <button className="collapsible">
          <b>Rating</b>
        </button>
        <div className="content">
          <input
            type="checkbox"
            className="occassion-type1"
            name="occassion-type1"
          />
          <label for="occassion-type1">5 star</label>
          <br />
          <input
            type="checkbox"
            className="occassion-type2"
            name="occassion-type2"
          />
          <label for="occassion-type2">4 star</label>
          <br />
          <input
            type="checkbox"
            className="occassion-type3"
            name="occassion-type3"
          />
          <label for="occassion-type3">3 Star</label>
          <br />
          <input
            type="checkbox"
            className="occassion-type4"
            name="occassion-type4"
          />
          <label for="occassion-type4">Between 2 & 4 Star</label>
          <br />
          <input
            type="checkbox"
            className="occassion-type5"
            name="occassion-type5"
          />
          <label for="occassion-type5">Between 3 & 5 Star</label>
          <br />
        </div>
        <div className="line2"></div>
        <button className="collapsible">
          <b>Type</b>
        </button>
        <div className="content">
          <input
            type="checkbox"
            className="product-type1"
            name="product-type1"
          />
          <label for="product-type1">Shoes</label>
          <br />
          <input
            type="checkbox"
            className="product-type2"
            name="product-type2"
          />
          <label for="product-type2">Clothing</label>
          <br />
        </div>
        <div className="line2"></div>
        <button className="collapsible">
          <b>By Gender</b>
        </button>
        <div className="content">
          <input type="checkbox" className="gender-type1" name="gender-type1" />
          <label for="gender-type1">Male</label>
          <br />
          <input type="checkbox" className="gender-type2" name="gender-type2" />
          <label for="gender-type2">female</label>
          <br />
          <input type="checkbox" className="gender-type3" name="gender-type3" />
          <label for="gender-type3">Kid Boys</label>
          <br />
          <input type="checkbox" className="gender-type4" name="gender-type4" />
          <label for="gender-type4">Kid Girls</label>
          <br />
        </div>

        <div className="line2"></div>
      </div>
    </div>
  );
};

export default ProductSidebar;

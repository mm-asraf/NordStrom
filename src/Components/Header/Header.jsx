import React from "react";
import "./Header.css";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ProductCategoryHome from "../main/ProductCategoryhome/ProductCategoryHome";
import { Box, Modal, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cartD = useSelector((state) => state.cart);

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

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
          <input type="text" placeholder="Search for products or brands" />
        </div>

        <div className="mid_right">
          <div className="signin">
            <Button varient="outline" onClick={google}>
              Sign In
            </Button>
            <Button onClick={handleOpen}> Modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <input type="text" placeholder="Enter username" />
                  <br />
                  <input type="text" placeholder="Enter password" />
                </Typography>
              </Box>
            </Modal>
          </div>

          <div className="cart_bag">
            <Link to="cart">cart({cartD.length})</Link>
            {/* <CardTravelIcon /> */}
          </div>
        </div>
      </div>

      {/* Nav header */}

      <div className="nav_header">
        <li>
          <Link to="/products">Sale</Link>
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

export default Header;

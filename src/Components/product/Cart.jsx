import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, delCart } from "../../Redux/cart/Actions";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Cart.css";
import { Link } from "react-router-dom";
import { delProduct } from "../../Redux/cart/Actions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = useState(null);

  const handleOpen = () => {
    if (data.length === 0) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const delProd = (product) => {
    dispatch(delCart(product));
  };

  const increasebyOne = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const tAmount = data.reduce((a, c) => {
      return a + Number(c.totalAmount);
    }, 0);
    setAmount(tAmount);
  }, [data]);

  const deleteProduct = (d) => {
    dispatch(delProduct(d));
  };

  return (
    <>
      <h1 className="cart">cart</h1>
      <div className="main">
        {data.map((d) => {
          return (
            <div className="cart_container">
              <div className="div_img">
                <img src={d.img} alt={d.title} />
              </div>
              <div className="div_details">
                <h4>{d.title}</h4>
                <h4>Quantity: {d.quantity}</h4>
                <h4>Marked Price: {d.price}</h4>
                <h4>Total Amount for this Product: {d.totalAmount}</h4>

                <Button
                  className="minus_btn"
                  variant="contained"
                  onClick={() => delProd(d)}
                >
                  -
                </Button>
                <Button variant="contained" onClick={() => increasebyOne(d)}>
                  +
                </Button>

                <Button variant="contained" onClick={() => deleteProduct(d)}>
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
        <div></div>
        <h4 className="net">Net Amount: {amount}</h4>
        <div className="buy">
          <Button variant="outlined" onClick={handleOpen}>
            BUY NOW
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="box">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <img
                  className="thank_you"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2pBMnwb3AZ2UC19LzUHq0xELxR62rqMWP5A&usqp=CAU"
                  alt="thank you for order"
                />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>
                  <Link to={`/`}>
                    <button className="shop_cont">Continue Shopping</button>
                  </Link>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Cart;

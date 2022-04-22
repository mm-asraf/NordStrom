import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, delCart } from "../../Redux/cart/Actions";
import "./Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(null);

  const data = useSelector((state) => state.cart);

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
              </div>
            </div>
          );
        })}
        <div></div>
        <h4 className="net">Net Amount: {amount}</h4>
      </div>
    </>
  );
};

export default Cart;

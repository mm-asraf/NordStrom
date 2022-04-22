import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, delCart } from "../../Redux/cart/Actions";

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
      return a + parseInt(c.totalAmount).toFixed(2);
    }, 0);
    setAmount(tAmount);
  }, [data]);

  return (
    <>
      <h1>cart</h1>
      <div>
        {data.map((d) => {
          return (
            <div className="cart_container">
              <div>
                <img width="150px" src={d.img} alt={d.title} />
              </div>
              <div>
                <h4>{d.title}</h4>
                <h4>Quantity: {d.quantity}</h4>
                <h4>Marked Price: {d.price}</h4>
                <h4>Total Amount for this Product: {d.totalAmount}</h4>
              </div>
              <Button variant="contained" onClick={() => delProd(d)}>
                -
              </Button>
              <Button variant="contained" onClick={() => increasebyOne(d)}>
                +
              </Button>
            </div>
          );
        })}
        <div>
          <h4>Net Amount: {amount}</h4>
        </div>
      </div>
    </>
  );
};

export default Cart;

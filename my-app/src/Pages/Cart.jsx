import React, { useState } from "react";
import axios from "axios";
import "../styles/cart.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcartSuccess,increse ,decrese} from '../Redux/CartReducer/action'
import { useAuth0 } from "@auth0/auth0-react";
import { cartitemdelete } from "../Redux/CartReducer/action";
import styled from "styled-components";
import { Button, useStatStyles } from "@chakra-ui/react";
import { Toast, useToast } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const toast = useToast();
  const { isLoading, isError, cart_products } = useSelector(
    (store) => store.cartReducer
  );

  const { isAuthenticated } = useAuth0();
  //     const number_of_item=cart_products.reduce((acc,current)=>acc+current.quantity,0)
  // console.log(number_of_item)
  const total_value = cart_products.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0
  );
  // console.log(cart_products, isLoading, isError);
  const [change, setChange] = useState(false);
  const handleChange = () => {
    setChange((prev) => !prev);
  };

  const dispatch = useDispatch();
  if (cart_products.length == 0 && isAuthenticated == true) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          width: "100%",
          height: "500px",
        }}
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
          alt=""
        />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div className="cart_notLogged_status">
        <h1>
          <b>Please Login to continue shopping !</b>
        </h1>
      </div>
    );
  }
  return (
    <div className="cart-container">
      {cart_products.length > 0 &&
        cart_products.map((ele) => (
          <div className="cart-body">
            <img src={ele.img} alt="" width="15%" />
            <button
              className="inc_btn"
              disabled={ele.quantity <= 1 ? "true" : false}
              onClick={() => dispatch(decrese(ele.id))}
            >
              -
            </button>
            <button className="inc">Quantity : {ele.quantity}</button>
            <button className="inc_btn" onClick={() => dispatch(increse(ele.id))}>
              +
            </button>
            <button className="inc">Price : {ele.price}</button>
            <button
              style={{ color: "green" }}
              onClick={() => dispatch(cartitemdelete(ele.id))}
            >
              <FiTrash2 size={25} />
            </button>
            <button
              className="inc"
              style={{
                backgroundColor: "#008CBA",
                color: "whitesmoke",
                padding: "1%",
              }}
            >
              Total: {ele.price * ele.quantity}
            </button>
            <hr />
          </div>
        ))}
      <div className="total">
        <h3>Total-Amount : ₹ {total_value}</h3>
        <button className="checkout_button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

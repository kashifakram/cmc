import React, { useContext } from 'react'
import { CartContext } from "./Layout";
import { Navigate  } from "react-router-dom";

export default function OrderNow() {
  const { cartData } = useContext(CartContext);
  const orderProductsUrl  = "http://localhost:5055/cartitems/checkout";

  const orderNowHandler = () => {
    fetch(orderProductsUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartData.cartItems),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

      window.location.replace("/thankyou");

  };
  return (
    <button type="button" className="btn btn-primary" onClick={orderNowHandler}> Order Now </button>
  )
}

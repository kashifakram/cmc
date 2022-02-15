import React, { useContext } from 'react'
import { CartContext } from "./Layout";

export default function RemoveFromCart() {
    const {cartData} = useContext(CartContext);

  return (
    <button type="button" className="btn btn-primary" onClick={cartData[2]}> Remove item from cart </button>
  )
}

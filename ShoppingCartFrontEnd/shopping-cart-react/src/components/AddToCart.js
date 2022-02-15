import React, { useContext } from 'react'
import { CartContext } from "./Layout";

export default function AddToCart() {
    const {cartData} = useContext(CartContext);

  return (
    <button type="button" className="btn btn-primary" onClick={cartData[1]} > Add item to cart</button>
  )
}

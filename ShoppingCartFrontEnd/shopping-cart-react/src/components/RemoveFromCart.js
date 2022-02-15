import React, { useContext } from 'react'
import { CartContext } from "./Layout";

export default function RemoveFromCart({productId}) {
    const {cartData} = useContext(CartContext);

  return (
    <button type="button" className="btn btn-primary" onClick={() => cartData.removeClickFunction(productId)}> Remove item from cart </button>
  )
}

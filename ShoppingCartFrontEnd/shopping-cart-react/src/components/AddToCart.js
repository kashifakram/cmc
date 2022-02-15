import React, { useContext } from 'react'
import { CartContext } from "./Layout";

export default function AddToCart({productId}) {
  const { cartData } = useContext(CartContext);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => cartData.addClickFunction(productId)} > Add item to cart</button>
    </>
  )
}

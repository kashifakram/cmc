import React from 'react'
import { Link } from "react-router-dom";

export default function Cart({totalItems}) {
    const items = totalItems == undefined || isNaN(totalItems) ? 0 : totalItems;
  return (
    <div>
        <p>Total items in cart: {items}</p>
        <Link to="/checkout"><button type="button" className="btn btn-success">Checkout</button></Link>
    </div>
  )
}

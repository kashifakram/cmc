import React from 'react'

export default function Cart({totalItems}) {
    const items = totalItems == undefined || isNaN(totalItems) ? 0 : totalItems;
  return (
    <div>

        <p>Total items in cart: {items}</p>
        <button type="button" className="btn btn-success">Checkout</button>
    </div>
  )
}

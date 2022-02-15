import React, { useState } from 'react'

export default function AddToCart({clickFunction}) {

  return (
    <button type="button" className="btn btn-primary" onClick={clickFunction} > Add item to cart</button>
  )
}

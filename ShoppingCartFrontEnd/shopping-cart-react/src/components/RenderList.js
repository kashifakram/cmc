import React, { useContext } from 'react'
import { CartContext } from "./Layout";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

export default function RenderList({isCheckout, name, price, desc, currency}) {
    const {cartData} = useContext(CartContext);
    const renderButtonText = isCheckout === "true" ? true : false;
    return (
        <>
            <tr>
                <td>
                    {name}
                </td>
                <td>
                    {price}
                </td>
                <td>
                    {desc}
                </td>
                <td>
                    {currency}
                </td>       
                <td>
                {!renderButtonText ? <AddToCart /> : <RemoveFromCart />}
                    {/* <button type="button" className="btn btn-primary">{renderButtonText}</button> */}
                </td>                                
            </tr>
        </>
    )
}

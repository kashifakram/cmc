import React, { useContext } from 'react'
import { CartContext } from "./Layout";

export default function RenderList({name, price, desc, currency}) {
    const {cartData} = useContext(CartContext);

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
                    <button type="button" className="btn btn-primary">Add to cart</button>
                </td>                                
            </tr>
        </>
    )
}

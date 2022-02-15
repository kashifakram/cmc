import React from 'react'

export default function RenderList({name, price, desc, currency}) {
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
            </tr>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import RenderList from "./RenderList";

export default function ProductsList() {

    const [list, setList] = useState([]);

    useEffect(() => {

    }, [list])

    return (
        <div>
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <th>
                            <td>
                                Product Name
                            </td>
                            <td>
                                Product Price
                            </td>
                            <td>
                                Product Desc
                            </td>
                            <td>
                                Product Currency
                            </td>
                        </th>
                    </thead>
                    <tbody>
                        {
                            list.map((product) => <RenderList key={product.Id} name={product.Name} price={product.Price} currency={product.Currency} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

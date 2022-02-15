import React, { useEffect, useState } from 'react';
import RenderList from "./RenderList";

export default function ProductsList() {

    const [list, setList] = useState([]);
    const fetchProductsUrl  = "http://localhost:5055/cartitems";

    useEffect(() => {
        fetch(fetchProductsUrl).then(response => response.json()).then(data => setList(data)).catch(error => console.log(error));
    }, [])

    return (
        <div>
            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((product) => <RenderList key={product.productId} name={product.productName} price={product.productPrice} desc={product.productDescription} currency={product.productCurrency} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

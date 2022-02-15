import React, { useEffect, useContext } from 'react';
import RenderList from "./RenderList";
import { CartContext } from "./Layout";

export default function ProductsList({totalItems}) {

    const fetchProductsUrl  = "http://localhost:5055/cartitems";
    const { cartData } = useContext(CartContext);

    useEffect(() => {
        fetch(fetchProductsUrl).then(response => response.json()).then(data => cartData.setAllProducts(data)).catch(error => console.log(error));
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
                            cartData.allProducts.map((product) => <RenderList key={product.productId} id={product.productId} name={product.productName} price={product.productPrice} desc={product.productDescription} currency={product.productCurrency} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

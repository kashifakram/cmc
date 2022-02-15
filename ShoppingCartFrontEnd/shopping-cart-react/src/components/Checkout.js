import React, {useContext} from 'react';
import RenderList from "./RenderList";
import { CartContext } from "./Layout";
import OrderNow from "./OrderNow";

export default function Checkout() {
    let grandTotal = 0;


    const {cartData} = useContext(CartContext);
    let items = cartData.cartItems;
    let selectedCountry = cartData.country == "" || cartData.country == undefined ? "aud" : cartData.country;
    const countryName = selectedCountry == "aud" ? "Australia" : selectedCountry == "gbp" ? "UK" : "USA";
    let itemsTotal = 0;

    if(items != undefined && items.length > 0) 
        items.forEach(item => {
            itemsTotal += item.productPrice;    
        });

    grandTotal = (cartData.conversion * itemsTotal) + cartData.shippingCost;

    return (
        <div>
            <div className="container mt-5">
                <h2>Your items:</h2>
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
                            items.map((product) => <RenderList  key={product.productId} isCheckout="true" id={product.productId} name={product.productName} price={product.productPrice} desc={product.productDescription} currency={product.productCurrency} />)
                        }
                    </tbody>
                </table>
                
                <p><strong>Selected Country: </strong>{countryName}</p>

                <p><strong>Shipping Cost: </strong>{cartData.totalCartItems ? cartData.shippingCost : 0}</p>
                 <p><strong>Sub Total: </strong>{itemsTotal}</p>
                <p><strong>Conversion Rate: </strong>{cartData.totalCartItems ? cartData.conversion : 0}</p>
                <p><strong>Grand Total: </strong>{cartData.totalCartItems ? grandTotal : 0}</p>

                { cartData.totalCartItems ? <OrderNow /> : ""}
            </div>
        </div>
    )
}
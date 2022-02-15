import React, {useEffect, useState} from 'react';
import RenderList from "./RenderList";

export default function Checkout({itemsTotal, selectedCountry, items }) {
    let grandTotal = 0;
    const [shippingCost, setShippingCost] = useState(0);
    let [conversion, setConversion] = useState(1);

    selectedCountry = selectedCountry == undefined || selectedCountry == "" ? "usd" : selectedCountry;
    itemsTotal = itemsTotal == undefined || isNaN(itemsTotal) ? 50 : itemsTotal;
    items = items == undefined || items.length < 1 ? 
    [{"productId": 0, "productName": "Product2", "productPrice": 10, "productDescription": "Product 2 Summary", "productCurrency": "usd"}, 
    {"productId": 1, "productName": "Product5", "productPrice": 30, "productDescription": "Product 5 Summary", "productCurrency": "usd"}] : items;

    const fetchShippingUrl  = `http://localhost:5055/currency/shipping?total=${itemsTotal}`;
    const fetchConversionUrl  = `http://localhost:5055/currency/conversion?currency=${selectedCountry}`;

    
    useEffect(() => {
        fetch(fetchShippingUrl).then(response => response.json()).then(data => { setShippingCost(data) }).catch(error => console.log(error));
        
        fetch(fetchConversionUrl).then(response => response.json()).then(data => { setConversion(data) }).catch(error => console.log(error));

    }, [])

    grandTotal = conversion * itemsTotal;

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
                            items.map((product) => <RenderList  key={product.productId} isCheckout="true" name={product.productName} price={product.productPrice} desc={product.productDescription} currency={product.productCurrency} />)
                        }
                    </tbody>
                </table>

                <p><strong>Shipping Cost: </strong>{shippingCost}</p>
                <p><strong>Grand Total: </strong>{grandTotal}</p>
            </div>
        </div>
    )
}
import React, {useEffect, useContext} from 'react'
import { CartContext } from "./Layout";

export default function () {
    const {cartData} = useContext(CartContext);

    const items = cartData.cartItems;
    const selectedCountry = cartData.country == "" || cartData.country == undefined ? "aud" : cartData.country;

    let itemsTotal = 0;

    if(items != undefined && items.length > 0) 
        items.forEach(item => {
            itemsTotal += item.productPrice;    
        });

    const fetchShippingUrl  = `http://localhost:5055/currency/shipping?total=${itemsTotal}`;
    const fetchConversionUrl  = `http://localhost:5055/currency/conversion?currency=${selectedCountry}`;

    useEffect(() => {
        fetch(fetchShippingUrl).then(response => response.json()).then(data => { cartData.setShippingCost(data) }).catch(error => console.log(error));
        
        fetch(fetchConversionUrl).then(response => response.json()).then(data => { cartData.setConversion(data) }).catch(error => console.log(error));

    }, [])

    return (
        <form>
            Please select your country: &nbsp;
            <select onChange={(e) => cartData.setCountryFunction(e.target.value)}>
                <option value="aud">Australia</option>
                <option value="gbp">UK</option>
                <option value="usd">USA</option>
            </select>
        </form>
    )
}

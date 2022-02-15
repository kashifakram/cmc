import { Outlet, Link } from "react-router-dom";
import React, { useState, createContext } from 'react'
import Cart from "./Cart";
import Country from "./Country";

export const CartContext = createContext();

const Layout = () => {
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [country, setCountry] = useState("aud");
    const [cartItems, setCartItems] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [shippingCost, setShippingCost] = useState(0);
    const [conversion, setConversion] = useState(1);

    const addClickFunction = (productId) => {
        console.log("add cart id " + productId);
        const productObj = allProducts.find(co => co.productId == productId);
        if (productObj) {
            setCartItems(previous => [...previous, productObj]);
            setTotalCartItems(previousCartItems => previousCartItems + 1);
        }
    };
    const removeClickFunction = (productId) => {
        console.log("REMOVE cart id " + productId);
        if (productId && cartItems) {
            setCartItems(previous => previous.filter(ci => ci.productId !== productId));
            setTotalCartItems(previousCartItems => previousCartItems - 1);
        }
    };
    const setCountryFunction = (newCountry) => { setCountry(newCountry) };

    const setCartItemsFunction = (newCartItems) => {
        var newItems = [];
        newCartItems.forEach(cartItem => {
            newItems.push(cartItem);
        });

        setCartItems(newItems);
    };

    return (
        <CartContext.Provider value={{
            cartData: {
                totalCartItems,
                addClickFunction, removeClickFunction, country, setCountryFunction,
                cartItems, setCartItemsFunction, allProducts, setAllProducts,
                shippingCost, setShippingCost,
                conversion, setConversion
            }
        }}>
            <div>
                <div className="container mt-3">
                    <div className="mt-4 p-5 bg-light text-black rounded">
                        <Link to="/"><h2>Available products</h2></Link>
                        <Country />
                    </div>
                    <Cart totalItems={totalCartItems} />
                </div>
            </div>
            <Outlet />
        </CartContext.Provider>
    )
};

export default Layout;
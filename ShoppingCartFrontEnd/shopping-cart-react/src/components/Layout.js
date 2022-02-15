import { Outlet } from "react-router-dom";
import React, { useState, createContext } from 'react'
import Cart from "./Cart";
import Country from "./Country";

export const CartContext = createContext();

const Layout = () => {
    const [cartItems, setCartItems] = useState(0);
    const clickFunction = () => {setCartItems(cartItems + 1)};

    return (
        <CartContext.Provider value={{cartData: [cartItems, clickFunction]}}>
            <div>
                <div className="container mt-3">
                    <div className="mt-4 p-5 bg-light text-black rounded">
                        <h2>Available products</h2>
                        <Country />
                    </div>
                    <Cart />
                </div>
            </div>
            <Outlet />
        </CartContext.Provider>
    )
};

export default Layout;
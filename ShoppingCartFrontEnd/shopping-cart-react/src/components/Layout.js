import { Outlet, Link } from "react-router-dom";
import React, { useState, createContext } from 'react'
import Cart from "./Cart";
import Country from "./Country";

export const CartContext = createContext();

const Layout = () => {
    const [cartItems, setCartItems] = useState(0);
    const clickFunction = () => {setCartItems(previousCartItems => previousCartItems + 1)};
    const removeClickFunction = () => {setCartItems(previousCartItems => previousCartItems - 1)};

    return (
        <CartContext.Provider value={{cartData: [cartItems, clickFunction, removeClickFunction]}}>
            <div>
                <div className="container mt-3">
                    <div className="mt-4 p-5 bg-light text-black rounded">
                    <Link to="/"><h2>Available products</h2></Link>
                        <Country />
                    </div>
                    <Cart totalItems={cartItems} />
                </div>
            </div>
            <Outlet />
        </CartContext.Provider>
    )
};

export default Layout;
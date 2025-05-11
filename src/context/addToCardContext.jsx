import { createContext, useContext, useEffect, useState } from "react";

export const AddToCartContext = createContext();

export const AddToCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(cartItems.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, newQty) => {
        if (newQty < 1) return;
        setCartItems(cartItems.map((item) =>
            item.id === id ? { ...item, quantity: newQty } : item
        ));
    };

    const isInCart = (id) => cartItems.some((item) => item.id === id);

    return (
        <AddToCartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, isInCart, updateQuantity }}>
            {children}
        </AddToCartContext.Provider>
    );
};

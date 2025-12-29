import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    // Load cart count
    useEffect(() => {
        fetch("http://localhost:8000/cart")
            .then(res => res.json())
            .then(data => setCartCount(data.reduce((sum, item) => sum + item.quantity, 0)));
    }, []);

    const addToCart = (product) => {
        fetch("http://localhost:8000/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: product._id,
                name: product.name,
                image: product.image,
                price: product.price,
            }),
        })
            .then(() => {
                setCartCount(prev => prev + 1);
            });
    };

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

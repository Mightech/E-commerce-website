import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((currentCart) => {

            const existingProduct = currentCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return currentCart.map((item) =>
                    item.id === product.id
                        ? {
                            ...item,
                            quantity: item.quantity + 1
                        }
                        : item
                );
            }

            return [
                ...currentCart,
                {
                    id: product.id,
                    category: product.productcategory,
                    name: product.Productname,
                    price: Number(
                        product.price
                            .replace("$", "")
                            .replace(",", "")
                    ),
                    image: product.img,
                    quantity: 1,
                }
            ];
        });
    };

    const increaseQuantity = (id) => {
        setCart((currentCart) =>
            currentCart.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity: product.quantity + 1
                    }
                    : product
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart((currentCart) =>
            currentCart.map((product) =>
                product.id === id
                    ? {
                        ...product,
                        quantity: Math.max(1, product.quantity - 1)
                    }
                    : product
            )
        );
    };

    const removeProduct = (id) => {
        setCart((currentCart) =>
            currentCart.filter((product) => product.id !== id)
        );
    };

    const cartCount = cart.reduce(
        (sum, product) => sum + product.quantity,
        0
    );

    const cartTotal = cart.reduce(
        (sum, product) =>
            sum + product.price * product.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeProduct,
                cartCount,
                cartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
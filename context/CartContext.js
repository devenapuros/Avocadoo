import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("Missing CartContextProvider to use cart context");
    return context;
};

const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const getNewItem = (product, quantity) => {
        return {
            id: product.id,
            name: product.name,
            sku: product.sku,
            unitPrice: product.offPrice || product.price,
            image: product.image,
            quantity,
            totalPrice: Number.parseFloat(
                (product.offPrice || product.price) * quantity
            ).toFixed(2),
        };
    };

    const updateTotalPrice = (productsList) => {
        let total = 0;
        productsList.forEach(
            (item) => (total += Number.parseFloat(item.totalPrice))
        );
        setTotalPrice(total.toFixed(2));
    };

    const addProduct = (product, quantity) => {
        const existingItem = products.find((item) => item.id === product.id);
        if (existingItem)
            setQuantity(quantity + existingItem.quantity, existingItem.id);
        else {
            const new_item = getNewItem(product, quantity);
            const new_products = [...products, new_item];
            setProducts(new_products);
            updateTotalPrice(new_products);
        }
    };

    const removeProduct = (id) => {
        const new_products = products.filter((item) => item.id !== id);
        setProducts(new_products);
        updateTotalPrice(new_products);
    };

    const setQuantity = (quantity, id) => {
        const new_products = products.map((item) => {
            if (item.id === id) {
                item.quantity = quantity;
                item.totalPrice = Number.parseFloat(
                    item.quantity * item.unitPrice
                ).toFixed(2);
            }
            return item;
        });
        setProducts(new_products);
        updateTotalPrice(new_products);
    };

    const clearCart = () => {
        setProducts([]);
        updateTotalPrice([]);
    };

    return (
        <CartContext.Provider
            value={{
                products,
                totalPrice,
                addProduct,
                removeProduct,
                setQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContextProvider };

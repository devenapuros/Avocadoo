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
            totalPrice: (product.offPrice || product.price) * quantity,
        };
    };

    const updateTotalPrice = (productsList) => {
        let total = 0;
        productsList.forEach((item) => (total += item.totalPrice));
        setTotalPrice(total);
    };

    const addProduct = (product, quantity) => {
        const existingItem = products.find((item) => item.id === product.id);
        if (existingItem) setQuantity(quantity, existingItem.id);
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
                item.quantity += quantity;
                item.totalPrice = item.quantity * item.unitPrice;
            }
            return item;
        });
        setProducts(new_products);
        updateTotalPrice(new_products);
    };

    return (
        <CartContext.Provider
            value={{
                products,
                totalPrice,
                addProduct,
                removeProduct,
                setQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContextProvider };

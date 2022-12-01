import { BagIcon } from "@icons/BagIcon";
import { useCartContext } from "context/CartContext";
import React from "react";
import { CartItem } from "./CartItem";
import { PrimaryButton } from "./PrimaryButton";

export const CartGrid = () => {
    const cart = useCartContext();
    return (
        <div className="cart-grid">
            {cart.products.map((product) => (
                <CartItem key={product.id} product={product} />
            ))}
            <span className="divider"></span>
            <div className="bottom-section">
                <div>
                    <small>Total:</small>
                    <h2>${cart.totalPrice}</h2>
                </div>
                <PrimaryButton label="Checkout" icon={<BagIcon />} />
            </div>
        </div>
    );
};

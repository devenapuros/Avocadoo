import { CartIcon } from "@icons/CartIcon";
import Link from "next/link";
import React from "react";

export const EmptyCartBanner = () => {
    return (
        <article className="cart-empty">
            <div className="cart-labels">
                <CartIcon />
                <h3>Your cart is empty</h3>
            </div>
            <Link href="/store">
                <a className="btn secondary-btn">Go to the store</a>
            </Link>
        </article>
    );
};

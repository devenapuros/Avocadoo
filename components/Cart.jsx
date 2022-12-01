import Basket from "@icons/Basket";
import { useCartContext } from "context/CartContext";
import Link from "next/link";

export const Cart = () => {
    const cart = useCartContext();
    return (
        <Link href="/cart">
            <a className="cart-link">
                <Basket size="30px" />
                {cart.products.length > 0 && (
                    <span className="cart-counter">{cart.products.length}</span>
                )}
            </a>
        </Link>
    );
};

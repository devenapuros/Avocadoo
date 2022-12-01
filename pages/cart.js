import { CartGrid } from "@components/CartGrid";
import { EmptyCartBanner } from "@components/EmptyCartBanner";
import { useCartContext } from "context/CartContext";

export default function Cart() {
    const cart = useCartContext();
    return (
        <section className="cart-page">
            <h1>Your cart</h1>
            {cart.products.length === 0 && <EmptyCartBanner />}
            {cart.products.length > 0 && <CartGrid />}
        </section>
    );
}

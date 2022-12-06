import { BagIcon } from "@icons/BagIcon";
import { useCartContext } from "context/CartContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { CartItem } from "./CartItem";
import { Loader } from "./Loader";

export const CartGrid = () => {
    const router = useRouter();
    const cart = useCartContext();
    const [loading, setLoading] = useState(false);

    const checkout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            router.push("/checkout");
        }, 1500);
    };

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
                <button
                    className={`btn primary-btn ${loading && "loading"}`}
                    onClick={checkout}
                >
                    {!loading && (
                        <>
                            Checkout <BagIcon />
                        </>
                    )}
                    {loading && <Loader />}
                </button>
            </div>
        </div>
    );
};

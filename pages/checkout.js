import { CheckIcon } from "@icons/CheckIcon";
import { useCartContext } from "context/CartContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function checkout() {
    const router = useRouter();
    const cart = useCartContext();
    const [totalPrice, setTotalPrice] = useState(cart.totalPrice);
    const [totalProducts, setTotalProducts] = useState(cart.products.length);

    useEffect(() => {
        cart.clearCart();
        if (totalPrice <= 0) router.push("/");
    }, []);

    return (
        <section className="checkout-page">
            <article className="checkout-card">
                <div className="card-header">
                    <CheckIcon size={64} />
                    <h1>¡Order successfully registered!</h1>
                    <p>
                        The order confirmation has been send to your email
                        address
                    </p>
                </div>
                <table className="stats-container">
                    <tbody>
                        <tr>
                            <td>
                                <div className="stat-column">
                                    <span>${totalPrice}</span>
                                    <small>Total amount</small>
                                </div>
                            </td>
                            <td>
                                <div className="stat-column">
                                    <span>x{totalProducts}</span>
                                    <small>Products ordered</small>
                                </div>
                            </td>
                            <td>
                                <div className="stat-column">
                                    <span>Registered</span>
                                    <small>Order state</small>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <small className="eco-label">
                    With every purchase we try to minimize our CO2
                    emissions.&nbsp;<a href="#">Learn more.</a>
                </small>
            </article>
            <Link href="/store">
                <a className="btn secondary-btn">Back to the store</a>
            </Link>
        </section>
    );
}

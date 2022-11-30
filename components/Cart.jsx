import Basket from "@icons/Basket";

export const Cart = () => {
    return (
        <a href="/cart" className="cart-link">
            <Basket size="30px" />
            <span className="cart-counter">2</span>
        </a>
    );
};

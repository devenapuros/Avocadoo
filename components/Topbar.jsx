import { Logo } from "./Logo";
import { Cart } from "./Cart";

export const Topbar = () => {
    return (
        <nav className="topbar">
            <Logo />
            <div className="right">
                <ul className="menu">
                    <li>
                        <a href="">Offers</a>
                    </li>
                    <li>
                        <a href="">Store</a>
                    </li>
                    <li>
                        <a href="">About us</a>
                    </li>
                </ul>
                <Cart />
            </div>
        </nav>
    );
};

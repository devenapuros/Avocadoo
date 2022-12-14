import { Logo } from "./Logo";
import { Cart } from "./Cart";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Topbar = () => {
    const [header, setHeader] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            let scrollY = window.pageYOffset;
            if (scrollY > 60) {
                setHeader(true);
            } else {
                setHeader(false);
            }
        });
    }, []);

    return (
        <nav className={`topbar ${header ? "header" : ""}`}>
            <Logo />
            <div className="right">
                <ul className="menu">
                    <li>
                        <Link href="/#offers">
                            <a>Offers</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/store">
                            <a>Store</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About us</a>
                        </Link>
                    </li>
                </ul>
                <Cart />
            </div>
        </nav>
    );
};

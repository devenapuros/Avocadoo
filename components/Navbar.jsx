import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <menu>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </menu>
        </nav>
    );
};

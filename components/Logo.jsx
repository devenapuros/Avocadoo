import Avocado from "icons/Avocado";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/">
            <a className="logo">
                <Avocado size="38px" />
                <span className="brand">Avocadoo</span>
            </a>
        </Link>
    );
};

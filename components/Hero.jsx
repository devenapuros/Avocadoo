import { MoneyIcon } from "@icons/MoneyIcon";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
    return (
        <main className="hero">
            <div className="slogans">
                <h1>
                    From the trees
                    <br />
                    to your table.
                </h1>
                <p>The best avocados for prepare your favorite food.</p>
                <div className="button-group">
                    <Link href="/store">
                        <a className="btn primary-btn">
                            Shut up and take my money! <MoneyIcon />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="btn secondary-btn">
                            Why buy?{" "}
                            <Image src="/think.svg" width="32" height="32" />
                        </a>
                    </Link>
                </div>
            </div>
            <img src="/green-avocados-hd1.png" width="600px" height="auto" />
        </main>
    );
};

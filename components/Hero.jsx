import { MoneyIcon } from "@icons/MoneyIcon";
import { ThinkFaceEmoji } from "@icons/ThinkFaceEmoji";
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
                    <Link href="/why-buy">
                        <a className="btn secondary-btn">
                            Why buy? <ThinkFaceEmoji size={36} />
                        </a>
                    </Link>
                </div>
            </div>
            <img src="/green-avocados-hd1.webp" width="600px" height="auto" />
        </main>
    );
};

import { MoneyIcon } from "@icons/MoneyIcon";
import Image from "next/image";

export const Hero = () => {
    return (
        <main className="hero">
            <div className="slogans">
                <h1>
                    From the trees<br />
                    to your table.
                </h1>
                <p>The best avocados for prepare your favorite food.</p>
                <div className="button-group">
                    <a
                        href="/store"
                        className="btn primary-btn"
                        icon={<img src="/avo.svg" width="32px" height="auto" />}
                    >
                        Shut up and take my money! <MoneyIcon />
                    </a>
                    <a className="btn secondary-btn" href="#">
                        Why buy?{" "}
                        <Image
                            src="/think.svg"
                            width="32"
                            height="32"
                        />
                    </a>
                </div>
            </div>
            <img src="/green-avocados-hd1.png" width="600px" height="auto" />
        </main>
    );
};

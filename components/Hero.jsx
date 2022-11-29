import { MoneyIcon } from "@icons/MoneyIcon";
import { QuestionIcon } from "@icons/QuestionIcon";
import { SecondaryButton } from "./SecondaryButton";

export const Hero = () => {

    const goToStore = () => router.push("/store");
    const goToWhyBuy = () => router.push("/why-buy");
    return (
        <main className="hero">
            <div className="slogans">
                <h1>
                    From trees to <br />
                    your table
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
                        Why buy? <QuestionIcon />
                    </a>
                </div>
            </div>
            <img src="/green-avocados-hd1.png" width="600px" height="auto" />
        </main>
    );
};

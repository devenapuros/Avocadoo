import { Github } from "@icons/Github";
import { Twitter } from "@icons/Twitter";
import { Logo } from "./Logo";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-row">
                <div className="footer-column brand-column">
                    <Logo />
                    <small>Shop the best avocados now.</small>
                    <div className="social-links">
                        <a
                            href="https://twitter.com/devenapuros"
                            className="social-item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Twitter /> Twitter
                        </a>
                        <a
                            href="https://github.com/devenapuros"
                            className="social-item"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github /> Github
                        </a>
                    </div>
                </div>
                <div className="footer-column">
                    <span className="column-title">Services</span>
                    <ul>
                        <li>Delivery</li>
                        <li>Pricing</li>
                        <li>Other food services</li>
                        <li>Services for restaurants</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <span className="column-title">Information</span>
                    <ul>
                        <li>Events</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <span className="column-title">Address</span>
                    <ul>
                        <li>Puebla - México</li>
                        <li>Jr Union #999</li>
                        <li>contact@avocadoo.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-credits">
                <small>
                    Icons made by <a href="">Freepik</a> from{" "}
                    <a href="www.flaticon.com">www.flaticon.com</a>
                </small>
                <small>
                    Avocado images taken from <a href="">Avocado 101</a> at{" "}
                    <a href="">California Avocado</a>
                </small>
            </div>
            <div className="footer-developer">
                <span>
                    Developed by{" "}
                    <a
                        href="https://twitter.com/devenapuros"
                        target="_blank"
                        rel="noreferrer"
                    >
                        @devenapuros
                    </a>
                </span>
            </div>
        </footer>
    );
};

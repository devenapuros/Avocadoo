import { AvocadoEmoji } from "@icons/AvocadoEmoji";
import Link from "next/link";

export const OffersLayout = ({ children }) => {
    return (
        <section className="offers" id="offers">
            <h1>Offers of the day</h1>
            <article className="offers-grid">{children}</article>
            <Link href="/store">
                <a className="btn secondary-btn">
                    See more avocados <AvocadoEmoji size={36} />
                </a>
            </Link>
        </section>
    );
};

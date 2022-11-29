import Image from "next/image";

export const OffersLayout = ({ children }) => {
    return (
        <section className="offers" id="offers">
            <h1>Offers of the day</h1>
            <article className="offers-grid">{children}</article>
            <a className="btn secondary-btn" href="/store">
                See more avocados{" "}
                <Image src="/avo.svg" width="32" height="32" />
            </a>
        </section>
    );
};

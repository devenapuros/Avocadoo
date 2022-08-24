import { SecondaryButton } from "./SecondaryButton";

export const OffersLayout = ({ children }) => {
    return (
        <section className="offers" id="offers">
            <h1>Offers of the day</h1>
            <article className="offers-grid">{children}</article>
            <SecondaryButton
                label="See more avocados"
                icon={<img src="/avo.svg" width="32px" height="auto" />}
            />
        </section>
    );
};

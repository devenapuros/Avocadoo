import { Hero } from "@components/Hero";
import { OffersLayout } from "@components/OffersLayout";
import { ProductCard } from "@components/ProductCard";

export const getServerSideProps = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/offers`);
        const offers = await res.json();
        return {
            props: {
                offers,
            },
        };
    } catch (error) {
        return { props: {} };
    }
};

export default function Home({ offers }) {
    return (
        <>
            <Hero />
            <OffersLayout>
                {offers &&
                    offers.map((avo) => (
                        <ProductCard key={avo?.id} avo={avo} />
                    ))}
            </OffersLayout>
        </>
    );
}

import { Hero } from "@components/Hero";
import { OffersLayout } from "@components/OffersLayout";
import { ProductCard } from "@components/ProductCard";

export const getServerSideProps = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/offers");
        const response = await res.json();
        return {
            props: {
                response,
            },
        };
    } catch (error) {
        return { props: {} };
    }
};

export default function Home({ response }) {
    const offers = response?.data;
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

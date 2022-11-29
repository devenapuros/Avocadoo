import { Hero } from "@components/Hero";
import { OffersLayout } from "@components/OffersLayout";
import { ProductCard } from "@components/ProductCard";

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/offers");
    const response = await res.json();
    return {
        props: {
            response,
        },
    };
};

export default function Home({ response }) {
    const offers = response.data;
    return (
        <>
            <Hero />
            <OffersLayout>
                {offers.map((avo) => (
                    <ProductCard key={avo.id} avo={avo} />
                ))}
            </OffersLayout>
        </>
    );
}

import { Hero } from "@components/Hero";
import { OffersLayout } from "@components/OffersLayout";
import { ProductCard } from "@components/ProductCard";

export default function Home() {
    return (
        <>
            <Hero />
            <OffersLayout>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </OffersLayout>
        </>
    );
}

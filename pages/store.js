import { ProductCard } from "@components/ProductCard";

export default function Store() {
    return (
        <section className="store">
            <h1>All our products</h1>
            <article className="store-grid">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </article>
        </section>
    );
}

import { ProductCard } from "@components/ProductCard";

export const getServerSideProps = async () => {
    try {
        const res = await fetch(`${process.env.API_URL}/avocados`);
        const avocados = await res.json();
        return {
            props: {
                avocados,
            },
        };
    } catch (error) {
        return { props: {} };
    }
};

export default function Store({ avocados }) {
    return (
        <section className="store">
            <h1>All our products</h1>
            <article className="store-grid">
                {avocados &&
                    avocados.map((avo) => (
                        <ProductCard key={avo.id} avo={avo} />
                    ))}
            </article>
        </section>
    );
}

import { ProductCard } from "@components/ProductCard";

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/avocados");
    const response = await res.json();
    return {
        props: {
            response,
        },
    };
};

export default function Store({ response }) {
    const avocados = response.data;
    return (
        <section className="store">
            <h1>All our products</h1>
            <article className="store-grid">
                {avocados.map((avo) => (
                    <ProductCard key={avo.id} avo={avo} />
                ))}
            </article>
        </section>
    );
}

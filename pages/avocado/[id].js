import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ProductItem() {
    const router = useRouter();
    const productId = router.query.id;
    const [avocadoDetails, setAvocadoDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/avocado/${productId}`)
            .then((res) => res.json())
            .then((response) => {
                const { data } = response;
                setAvocadoDetails(data);
            });
    }, []);

    return (
        <div>
            {!avocadoDetails && (
                <h1 style={{ color: "#333" }}>404 | Product not found</h1>
            )}
            {avocadoDetails && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <img src={avocadoDetails.image} width="250px" />
                    <strong>{avocadoDetails.name}</strong>
                    <h1>{`\$${avocadoDetails.price}`}</h1>
                    <small style={{ color: "gray" }}>{avocadoDetails.id}</small>
                    <p>{avocadoDetails.attributes.description}</p>
                </div>
            )}
        </div>
    );
}

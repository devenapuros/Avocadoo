import PosMeMuero from "icons/PosMeMuero";
import { useState, useEffect } from "react";

export default function Home() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/avocados")
            .then((res) => res.json())
            .then((response) => {
                const { data } = response;
                setProductList(data);
            });
    }, []);

    return (
        <div>
            <h1>Home</h1>
            <h2>Products</h2>
            <ul>
                {!productList && <h2>Loading...</h2>}
                {productList.length > 0 &&
                    productList.map((product) => (
                        <li
                            key={product.id}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <img src={product.image} width="250px" />
                            <strong>{product.name}</strong>
                            <h1>{`\$${product.price}`}</h1>
                            <small>{product.attributes.description}</small>
                        </li>
                    ))}
            </ul>
            <PosMeMuero />
        </div>
    );
}

import { useRouter } from "next/router";

export default function ProductItem() {
    const router = useRouter();
    const productId = router.query.id;
    return (
        <div>
            <h1>Product Item Page</h1>
            <p>Product ID: {productId}</p>
        </div>
    );
}

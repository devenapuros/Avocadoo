import { useRouter } from "next/router";
import { NumberInput } from "@components/NumberInput";
import Image from "next/image";
import PosMeMuero from "@icons/PosMeMuero";
import { BagIcon } from "@icons/BagIcon";
import { LeftArrowIcon } from "@icons/LeftArrowIcon";
import { useState } from "react";
import { useCartContext } from "context/CartContext";
import Link from "next/link";
import { CheckIcon } from "@icons/CheckIcon";

export const getServerSideProps = async (context) => {
    try {
        const res = await fetch(`${process.env.API_URL}/avocado/${context.params["id"]}`);
        const avocado = await res.json();
        return {
            props: {
                avocado,
            },
        };
    } catch (error) {
        return { props: {} };
    }
};

export default function ProductItem({ avocado }) {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const cart = useCartContext();
    const [selected, setSelected] = useState(false);

    const addToCart = () => {
        cart.addProduct(avocado, quantity);
        setSelected(true);
        setTimeout(() => {
            setSelected(false);
        }, 700);
    };

    return (
        <div>
            {!avocado && (
                <section className="product-detail not-found">
                    <PosMeMuero size="200px" />
                    <h1>
                        Sorry! We could not find the avocado you are looking
                        for.
                    </h1>
                    <Link href="/store">
                        <a className="btn secondary-btn">Go to the store</a>
                    </Link>
                </section>
            )}
            {avocado && (
                <section className="product-detail">
                    <button
                        className="btn back-btn"
                        onClick={() => router.back()}
                    >
                        <LeftArrowIcon />
                        Go back
                    </button>
                    <div className="product-data">
                        <Image
                            src={avocado.image}
                            width="370px"
                            height="370px"
                        />
                        <div className="product-right">
                            <div>
                                <h1 className="product-title">
                                    {avocado.name}
                                </h1>
                                <small className="kg-label">
                                    SKU: {avocado.sku}
                                </small>
                            </div>
                            <div>
                                {avocado.off && (
                                    <small className="text-muted muted-price">
                                        ${avocado.price}
                                    </small>
                                )}
                                <div className="price">
                                    <span>
                                        ${avocado.offPrice || avocado.price}
                                    </span>
                                    <span className="kg-label">KG</span>
                                    {avocado.off && (
                                        <div className="offer-tag">
                                            {avocado.off}% OFF
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="add-container">
                                <NumberInput
                                    id="kilograms"
                                    value={quantity}
                                    handleChange={setQuantity}
                                    placeholder="Quantity in kilograms"
                                    min={1}
                                />
                                <button
                                    className={`btn primary-btn ${
                                        selected && "selected"
                                    }`}
                                    onClick={addToCart}
                                >
                                    {!selected && (
                                        <>
                                            Add to cart <BagIcon />
                                        </>
                                    )}
                                    {selected && <CheckIcon />}
                                </button>
                            </div>
                        </div>
                    </div>
                    <article>
                        <h2>About this avocado</h2>
                        <p>{avocado.attributes?.description}</p>
                    </article>
                    <article>
                        <h2>Attributes</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Shape</td>
                                    <td>{avocado.attributes?.shape}</td>
                                </tr>
                                <tr>
                                    <td>Hardiness</td>
                                    <td>{avocado.attributes?.hardiness}</td>
                                </tr>
                                <tr>
                                    <td>Taste</td>
                                    <td>{avocado.attributes?.taste}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
            )}
        </div>
    );
}

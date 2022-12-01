import { useRouter } from "next/router";
import { PrimaryButton } from "@components/PrimaryButton";
import { NumberInput } from "@components/NumberInput";
import Image from "next/image";
import PosMeMuero from "@icons/PosMeMuero";
import { BagIcon } from "@icons/BagIcon";
import { LeftArrowIcon } from "@icons/LeftArrowIcon";
import { useState } from "react";
import { useCartContext } from "context/CartContext";
import Link from "next/link";

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `http://localhost:3000/api/avocado/${context.params["id"]}`
    );
    const response = await res.json();
    return {
        props: {
            response,
        },
    };
};

export default function ProductItem({ response }) {
    const avo = response.data;
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const cart = useCartContext();

    const addToCart = () => {
        cart.addProduct(avo, quantity);
    };

    return (
        <div>
            {!avo && (
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
            {avo && (
                <section className="product-detail">
                    <button
                        className="btn back-btn"
                        onClick={() => router.back()}
                    >
                        <LeftArrowIcon />
                        Go back
                    </button>
                    <div className="product-data">
                        <Image src={avo.image} width="370px" height="370px" />
                        <div className="product-right">
                            <div>
                                <h1 className="product-title">{avo.name}</h1>
                                <small className="kg-label">
                                    SKU: {avo.sku}
                                </small>
                            </div>
                            <div>
                                {avo.off && (
                                    <small className="text-muted muted-price">
                                        ${avo.price}
                                    </small>
                                )}
                                <div className="price">
                                    <span>${avo.offPrice || avo.price}</span>
                                    <span className="kg-label">KG</span>
                                    {avo.off && (
                                        <div className="offer-tag">
                                            {avo.off}% OFF
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
                                <PrimaryButton
                                    label="Add to cart"
                                    icon={<BagIcon />}
                                    handleClick={addToCart}
                                />
                            </div>
                        </div>
                    </div>
                    <article>
                        <h2>About this avocado</h2>
                        <p>{avo.attributes?.description}</p>
                    </article>
                    <article>
                        <h2>Attributes</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Shape</td>
                                    <td>{avo.attributes?.shape}</td>
                                </tr>
                                <tr>
                                    <td>Hardiness</td>
                                    <td>{avo.attributes?.hardiness}</td>
                                </tr>
                                <tr>
                                    <td>Taste</td>
                                    <td>{avo.attributes?.taste}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
            )}
        </div>
    );
}

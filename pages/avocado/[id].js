import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PrimaryButton } from "@components/PrimaryButton";
import { NumberInput } from "@components/NumberInput";
import Image from "next/image";
import PosMeMuero from "@icons/PosMeMuero";
import { SecondaryButton } from "@components/SecondaryButton";
import { BagIcon } from "@icons/BagIcon";

export default function ProductItem() {
    const router = useRouter();
    const productId = router.query.id;
    const [avocadoDetails, setAvocadoDetails] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/avocado/${productId}`)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                const { data } = response;
                setAvocadoDetails(data);
            });
    }, []);

    useEffect(() => {
        console.log(productId);
    }, [productId]);

    return (
        <div>
            {!avocadoDetails && (
                <section className="product-detail not-found">
                    <PosMeMuero size="200px" />
                    <h1>Sorry! We could not find the product.</h1>
                    <SecondaryButton
                        label="Go to the store"
                        icon={<img src="/avo.svg" width="32px" height="auto" />}
                    />
                </section>
            )}
            {avocadoDetails && (
                <section className="product-detail">
                    <div className="product-data">
                        <Image
                            src={avocadoDetails.image}
                            width="370px"
                            height="370px"
                        />
                        <div className="product-right">
                            <div>
                                <h1>{avocadoDetails.name}</h1>
                                <small className="kg-label">
                                    SKU: {avocadoDetails.sku}
                                </small>
                            </div>
                            <div>
                                <small className="text-muted muted-price">
                                    $1.45
                                </small>
                                <span className="price">
                                    {`$${avocadoDetails.price}`}
                                    <div className="offer-tag">10% OFF</div>
                                </span>
                            </div>
                            <div className="add-container">
                                <NumberInput placeholder="Quantity in kilograms" />
                                <PrimaryButton
                                    label="Add to cart"
                                    icon={<BagIcon />}
                                />
                            </div>
                        </div>
                    </div>
                    <article>
                        <h2>About this avocado</h2>
                        <p>{avocadoDetails.attributes.description}</p>
                    </article>
                    <article>
                        <h2>Atributtes</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Shape</td>
                                    <td>{avocadoDetails.attributes.shape}</td>
                                </tr>
                                <tr>
                                    <td>Hardiness</td>
                                    <td>
                                        {avocadoDetails.attributes.hardiness}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Taste</td>
                                    <td>{avocadoDetails.attributes.taste}</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                </section>
            )}
        </div>
    );
}

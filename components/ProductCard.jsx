import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = ({ avo }) => {
    return (
        <Link href={`/avocado/${avo.id}`}>
            <a className="product-card">
                <Image
                    src={avo.image}
                    width="300px"
                    height="300px"
                    objectFit="contain"
                    alt={`Image of ${avo.name}`}
                />
                <div className="card-body">
                    <span className="product-name">{avo.name}</span>
                    <div className="price-container">
                        {avo.off && (
                            <small className="text-muted muted-price">
                                ${avo.price}
                            </small>
                        )}
                        <p className="text-muted price">
                            ${avo.offPrice || avo.price}{" "}
                            <span className="kg-label">KG</span>
                        </p>
                    </div>
                </div>
                {avo.off && <div className="offer-tag">{avo.off}% OFF</div>}
            </a>
        </Link>
    );
};

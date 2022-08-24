import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProductCard = () => {
    return (
        <Link href={`/avocado/${"6trfgkkj"}`}>
            <a className="product-card">
                <Image
                    src="/images/bacon.jpg"
                    width="300px"
                    height="300px"
                    objectFit="contain"
                    alt="Image of avocado"
                />
                <div className="card-body">
                    <span className="product-name">Avocado 1</span>
                    <div className="price-container">
                        <small className="text-muted muted-price">$1.45</small>
                        <p className="text-muted price">
                            $1.45 <span className="kg-label">KG</span>
                        </p>
                    </div>
                </div>
                <div className="offer-tag">10% OFF</div>
            </a>
        </Link>
    );
};

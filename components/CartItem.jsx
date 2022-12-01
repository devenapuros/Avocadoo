import { CloseIcon } from "@icons/CloseIcon";
import { useCartContext } from "context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { NumberInput } from "./NumberInput";

export const CartItem = ({ product }) => {
    const cart = useCartContext();
    return (
        <div className="cart-item">
            <div className="cart-section left">
                <Image
                    src={product.image}
                    height={80}
                    width={80}
                    objectFit="contain"
                />
                <div className="avo-data">
                    <Link href={`/avocado/${product.id}`}>
                        <a className="avo-name">{product.name}</a>
                    </Link>
                    <small className="kg-label">SKU: {product.sku}</small>
                </div>
            </div>
            <div className="cart-section right">
                <small>${product.unitPrice}</small>
                <NumberInput />
                <span className="avo-price">${product.totalPrice}</span>
                <button
                    className="remove-btn"
                    onClick={() => cart.removeProduct(product.id)}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

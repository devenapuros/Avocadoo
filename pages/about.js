import Image from "next/image";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <Image src="/devenapuros.jpg" height={100} width={100} />
            </div>
        </div>
    );
}

import { AvocadoEmoji } from "@icons/AvocadoEmoji";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function WhyBuy() {
    return (
        <section className="why-section">
            <header>
                <h1>Not sure about buying avocados?</h1>
                <p>Here are 6 surprising facts about them.</p>
            </header>
            <Image
                className="image"
                src="/why-avocados.jpg"
                width={768}
                height={400}
                objectFit="cover"
            />
            <article className="why-grid">
                <div className="info-item">
                    <div className="info-title">
                        <span>1</span>
                        <h1>Most avocados come from Mexico.</h1>
                    </div>
                    <p>
                        While avocados are grown in California and Florida, the
                        majority sold in grocery stores come from south central
                        Mexico. The main reason for the abundance of “south of
                        the border” avocados is that Mexico is blessed with a
                        year-round growing climate. The avocado is believed to
                        have originated in the state of Puebla, Mexico, as far
                        back as 10,000 B.C.
                    </p>
                </div>
                <div className="info-item">
                    <div className="info-title">
                        <span>2</span>
                        <h1>There are different varieties.</h1>
                    </div>
                    <p>
                        Avocados’ taste and texture depend on the region they’re
                        from. Florida-grown avocados are lower in fat and
                        firmer, while Hass avocados, from Mexico, are perfect
                        for mashing and whipping.
                    </p>
                </div>
                <div className="info-item">
                    <div className="info-title">
                        <span>3</span>
                        <h1>“Avocado” wasn’t its original name.</h1>
                    </div>
                    <p>
                        Irishman Sir Hans Sloane called it an avocado in 1696 in
                        a Jamaican-plants catalog. He also dubbed the avocado
                        tree the “alligator pear tree.”
                    </p>
                </div>
                <div className="info-item">
                    <div className="info-title">
                        <span>4</span>
                        <h1>It’s actually a fruit.</h1>
                    </div>
                    <p>
                        Did you know that an avocado is a fruit? While
                        definitely not sweet, it falls firmly in the fruit-not
                        the vegetable-family. That’s because the avocado tree is
                        part of the flowering-plant family Lauraceae.
                    </p>
                </div>
                <div className="info-item">
                    <div className="info-title">
                        <span>5</span>
                        <h1>
                            There’s a secret trick to ripening them up quick.
                        </h1>
                    </div>
                    <p>
                        Need to ripen that avocado ASAP? Place it in a brown
                        paper bag with a banana or two. The bananas will release
                        ethylene gas, a natural plant hormone that aids in
                        ripening fruit. On the other hand, check out this guide
                        to learn how to store them for later.
                    </p>
                </div>
                <div className="info-item">
                    <div className="info-title">
                        <span>6</span>
                        <h1>You can substitute it for butter.</h1>
                    </div>
                    <p>
                        In lieu of butter, many vegan bakers use avocado to add
                        moistness to cupcakes, cakes and other baked goods. Want
                        to give it a go? Keep in mind that avocados can give a
                        green hue to the finished dish.
                    </p>
                </div>
            </article>
            <p className="credit-link">
                Originally from&nbsp;
                <a href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/">
                    Taste of Home
                </a>
                .
            </p>
            <Link href="/store">
                <a className="btn secondary-btn">
                    Go to the store
                    <AvocadoEmoji />
                </a>
            </Link>
        </section>
    );
}

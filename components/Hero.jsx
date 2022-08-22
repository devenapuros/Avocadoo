import React from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export const Hero = () => {
    return (
        <main className="hero">
            <div>
                <h1>From trees to your table</h1>
                <p>Salads guacamole, and more food can you prepare</p>
                <PrimaryButton />
                <SecondaryButton />
            </div>
            <img
                src="/green-avocados-on-white-surface.jpg"
                width="650px"
                height="auto"
            />
        </main>
    );
};

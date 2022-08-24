import React from "react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

export const Hero = () => {
    return (
        <main className="hero">
            <div className="slogans">
                <h1>
                    From trees to <br />
                    your table
                </h1>
                <p>The best avocados for prepare your favorite food.</p>
                <div className="button-group">
                    <PrimaryButton
                        label="Buy now"
                        icon={<img src="/avo.svg" width="32px" height="auto" />}
                    />
                    <SecondaryButton
                        label="Why buy avocados?"
                        icon={
                            <img src="/think.svg" width="32px" height="auto" />
                        }
                    />
                </div>
            </div>
            <img src="/green-avocados-hd1.png" width="600px" height="auto" />
        </main>
    );
};

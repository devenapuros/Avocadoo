import { Github } from "@icons/Github";
import { LinkedInIcon } from "@icons/LinkedInIcon";
import { Twitter } from "@icons/Twitter";

export default function About() {
    return (
        <section className="about-section">
            <h1>About</h1>
            <p>
                As you may have noticed this is not a real store. This project
                was developed to learn Next.js and some concepts associated with
                this framework such as page routing, application state
                management and server-side rendering.
            </p>

            <div className="social-links">
                <a
                    href="https://linkedin.com/in/fdaniel-gomez"
                    className="social-item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon /> LinkedIn
                </a>
                <a
                    href="https://github.com/devenapuros"
                    className="social-item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Github /> Github
                </a>
                <a
                    href="https://twitter.com/devenapuros"
                    className="social-item"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Twitter /> Twitter
                </a>
            </div>
        </section>
    );
}

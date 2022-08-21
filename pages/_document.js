import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="shortcut icon"
                        type="image/pngg"
                        href="/avocado32.png"
                    />
                    <title>Avocadoo - Shop the best avocados now</title>
                    {/* Webfont */}
                    {/* Stylesheet */}
                    {/*  Scripts (js) */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

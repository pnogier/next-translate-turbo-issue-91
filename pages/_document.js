import Document, {Head, Html, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

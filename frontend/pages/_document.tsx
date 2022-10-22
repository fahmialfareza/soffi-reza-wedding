// nextjs document
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="http://fonts.cdnfonts.com/css/bukhari-script"
            rel="stylesheet"
          />
          <link
            href="http://fonts.cdnfonts.com/css/bookerly"
            rel="stylesheet"
          />
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

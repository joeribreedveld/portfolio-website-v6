// Imports
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";

// Functions
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Joeri Breedveld is a passionate frontend developer driven by learning and challenges"
          />
          <meta property="og:url" content="https://joeribreedveld.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Joeri Breedveld" />
          <meta
            property="og:description"
            content="Joeri Breedveld is a passionate frontend developer driven by learning and challenges"
          />
          <meta property="og:image" content="/img/hero-bg.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="joeribreedveld.com" />
          <meta property="twitter:url" content="https://joeribreedveld.com" />
          <meta name="twitter:title" content="Joeri Breedveld" />
          <meta
            name="twitter:description"
            content="Joeri Breedveld is a passionate frontend developer driven by learning and challenges"
          />
          <meta name="twitter:image" content="/img/hero-bg.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Exports
export default MyDocument;

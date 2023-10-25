import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{"Geo Sauer - Engineer, Sculptor, Maker, Nerd"}</title>
          <meta name="robots" content="follow, index" />
          <meta
            content={`PERN stack engineer constantly adding new tech to my toolbox. Get in touch with me to learn more!`}
            name="description"
          />
          <meta property="og:type" content={"website"} />
          <meta property="og:site_name" content="Geo Sauer" />
          <meta
            property="og:description"
            content={`PERN stack engineer constantly adding new tech to my toolbox. Get in touch with me to learn more!`}
          />
          <meta property="og:title" content={"Geo Sauer - Engineer, Sculptor, Maker, Nerd"} />
          <meta property="og:image" content={"/avatar.png"} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={"Geo Sauer - Engineer, Sculptor, Maker, Nerd"} />
          <meta
            name="twitter:description"
            content={`PERN stack engineer constantly adding new tech to my toolbox. Get in touch with me to learn more!`}
          />
          <meta name="twitter:image" content={"/avatar.png"} />
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

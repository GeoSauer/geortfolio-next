import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Geo Sauer - Engineer, Sculptor, Maker, Nerd",
    description: `PERN stack engineer constantly adding new tech to my toolbox. Get in touch with me to learn more!`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://geosauer.com${router.asPath}`} />
        <link rel="canonical" href={`https://geosauer.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Geo Sauer" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && <meta property="article:published_time" content={meta.date} />}
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>
      <main style={{ width: "full" }}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}

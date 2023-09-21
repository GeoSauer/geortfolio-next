import Navbar from "./Navbar";
import Footer from "./Footer";
import SuperDarkMode from "./SuperDarkMode";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Layout({ children, ...customMeta }) {
  const [superDark, setSuperDark] = useState(false);
  const router = useRouter();

  const meta = {
    title: "Geo Sauer - ",
    //TODO
    description: `Something inspirational?`,
    image: "/favicon.ico",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        {/* //TODO */}
        <meta property="og:url" content={`https://yourwebsite.com${router.asPath}`} />
        <link rel="canonical" href={`https://yourwebsite.com${router.asPath}`} />
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
      </Head>
      <main>
        <SuperDarkMode superDark={superDark}>
          <Navbar superDark={superDark} setSuperDark={setSuperDark} />
          <Box>{children}</Box>
          <Footer />
        </SuperDarkMode>
      </main>
    </>
  );
}

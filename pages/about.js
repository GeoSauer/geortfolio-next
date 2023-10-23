import Layout from "@/components/Layout/Layout";
import About from "../components/About/About";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Geo Sauer</title>
        <meta
          name="description"
          content="A deeper dive into my interests and what fuels me as an engineer"
        />
      </Head>

      <Layout heading="About me">
        <About />
      </Layout>
    </>
  );
}

import About from "@/components/About/About";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About - Geo Sauer</title>
        <meta
          name="description"
          content="I'm a Senior Software Engineer at HazAdapt, building accessible, data-rich products. Learn about my engineering work, creative background, and life along Colorado's Front Range."
        />
      </Head>

      <Layout heading="About me">
        <About />
      </Layout>
    </>
  );
}

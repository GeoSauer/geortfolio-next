import Layout from "@/components/Layout/Layout";
import Products from "@/components/Products/Products";
import Head from "next/head";

export default function products() {
  return (
    <>
      <Head>
        <title>Products - Geo Sauer</title>
        <meta
          name="description"
          content="Here's some examples of coding products I've worked on."
        />
      </Head>

      <Layout heading="Products">
        <Products />
      </Layout>
    </>
  );
}

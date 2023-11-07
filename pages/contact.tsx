import Contact from "@/components/Contact/Contact";
import Layout from "@/components/Layout/Layout";
import myData from "@/data";
import Head from "next/head";

export default function contact() {
  return (
    <>
      <Head>
        <title>Contact - Geo Sauer</title>
        <meta
          name="description"
          content={`Feel free to connect with me at ${myData.socialUrls.linkedIn} or send me a message at ${myData.email}.`}
        />
      </Head>

      <Layout heading="Contact">
        <Contact />
      </Layout>
    </>
  );
}

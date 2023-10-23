import Layout from "@/components/Layout/Layout";
import MyJourney from "@/components/MyJourney/MyJourney";
import Head from "next/head";

export default function myJourney() {
  return (
    <>
      <Head>
        <title>Journey - Geo Sauer</title>
        <meta
          name="description"
          content="A brief retelling of the wild ride I've enjoyed on this Little Blue Marble..."
        />
      </Head>

      <Layout heading="My Journey">
        <MyJourney />
      </Layout>
    </>
  );
}

import Layout from "@/components/Layout/Layout";
import Projects from "@/components/Projects/Projects";
import Head from "next/head";

export default function projects() {
  return (
    <>
      <Head>
        <title>Projects - Geo Sauer</title>
        <meta
          name="description"
          content="Here's some examples of coding projects I've worked on."
        />
      </Head>

      <Layout heading="Projects">
        <Projects />
      </Layout>
    </>
  );
}

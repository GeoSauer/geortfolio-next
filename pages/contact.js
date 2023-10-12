import Contact from "@/components/Contact/Contact";
import Layout from "@/components/Layout/Layout";
import myData from "@/data";

export default function contact() {
  return (
    <Layout
      title="Contact - Geo Sauer"
      description={`Feel free to connect with me at ${myData.socialUrls.linkedIn} or send me a message at ${myData.email}.`}
    >
      <Contact />
    </Layout>
  );
}

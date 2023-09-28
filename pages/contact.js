import Layout from "@/components/Layout";
import myData from "@/data";

export default function Contact() {
  return (
    <Layout
      title="Contact - Geo Sauer"
      description={`Feel free to connect with me at ${myData.socialUrls.linkedIn} or send me a message at ${myData.email}.`}
    >
      Contact
    </Layout>
  );
}

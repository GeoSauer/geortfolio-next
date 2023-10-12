import Layout from "@/components/Layout/Layout";
import MyJourney from "@/components/MyJourney/MyJourney";

export default function myJourney() {
  return (
    <Layout
      title="Journey - Geo Sauer"
      description="A brief retelling of the wild ride I've enjoyed on this Little Blue Marble..."
    >
      <MyJourney />
    </Layout>
  );
}

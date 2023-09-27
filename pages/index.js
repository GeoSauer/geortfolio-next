import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import LatestCode from "@/components/LatestCode";
import getLatestRepos from "@/lib/getLatestRepos";
import myData from "@/data";
import FeaturedProject from "@/components/FeaturedProject";

export default function Home({ repositories }) {
  return (
    <Layout>
      <Hero />
      <FeaturedProject />
      {/* <LatestCode repositories={repositories} /> */}
    </Layout>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(myData, token);

  return {
    props: {
      repositories,
    },
  };
};

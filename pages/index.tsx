import Home from "@/components/Home/Home";
import Layout from "@/components/Layout/Layout";
import myData from "@/data";
import getLatestRepos, { Repositories } from "@/lib/getLatestRepos";

export default function home({ repositories }: Repositories) {
  return (
    <Layout>
      <Home repositories={repositories} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const repositories = await getLatestRepos(myData.githubUsername);

  return {
    props: {
      repositories,
    },
    // Revalidate every hour (3600 seconds)
    revalidate: 3600,
  };
};

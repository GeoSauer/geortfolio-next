import Layout from "@/components/Layout/Layout";
import getLatestRepos from "@/lib/getLatestRepos";
import myData from "@/data";
import Home from "@/components/Home/Home";

export default function home({ repositories }) {
  return (
    <Layout>
      <Home repositories={repositories} />
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

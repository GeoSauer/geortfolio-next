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

export const getServerSideProps = async () => {
  //TODO crack Next env variables because this isn't working properly
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(myData.githubUsername, token);

  return {
    props: {
      repositories,
    },
  };
};

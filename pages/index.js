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
  //TODO crack Next env variables because this isn't working properly
  let token = process.env.GITHUB_AUTH_TOKEN;
  const repositories = await getLatestRepos(myData, token);

  return {
    props: {
      repositories,
    },
  };
};

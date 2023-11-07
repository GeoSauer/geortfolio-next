import Layout from "@/components/Layout/Layout";
import getLatestRepos from "@/lib/getLatestRepos";
import Home from "@/components/Home/Home";
import myData from "@/data";

type Repos = {
  repositories: {
    name: string;
    description: string | null;
    clone_url: string;
  }[];
};

export default function home({ repositories }: Repos) {
  return (
    <Layout heading={undefined}>
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

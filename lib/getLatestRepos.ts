import axios, { AxiosResponse } from "axios";

export type Repositories = {
  repositories: {
    name: string;
    description?: string;
    clone_url: string;
  }[];
};

const getLatestRepos = async (githubUsername: string, token?: string): Promise<Repositories[]> => {
  try {
    const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const res: AxiosResponse<Repositories[]> = await axios.get(apiUrl, { headers });
    const repos: Repositories[] = res.data;

    return repos;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getLatestRepos;

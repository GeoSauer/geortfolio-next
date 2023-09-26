import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const apiUrl = `https://api.github.com/users/${data.githubUsername}/repos?sort=updated&per_page=6`;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const res = await axios.get(apiUrl, { headers });
    const repos = res.data;

    return repos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;

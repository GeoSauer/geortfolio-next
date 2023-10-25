import axios from "axios";

const getLatestRepos = async (myData, token) => {
  try {
    console.log("anything?");
    const apiUrl = `https://api.github.com/users/${myData.githubUsername}/repos?sort=updated&per_page=6`;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const res = await axios.get(apiUrl, { headers });
    const repos = res.data;

    return repos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;

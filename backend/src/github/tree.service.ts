import axios from "axios";

const API = "https://api.github.com";

export async function getRepositoryTree(
  owner: string,
  repo: string,
  token: string
) {
  const response = await axios.get(
    `${API}/repos/${owner}/${repo}/git/trees/main?recursive=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.tree;
}
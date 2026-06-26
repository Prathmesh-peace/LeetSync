import axios from "axios";
import type { GitHubUser } from "./github-user.js";

export async function getGitHubUser(
  accessToken: string
): Promise<GitHubUser> {
  const response = await axios.get(
    "https://api.github.com/user",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const user = response.data;

  return {
    id: user.id,
    login: user.login,
    name: user.name,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
  };
}
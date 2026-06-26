import type { GitHubUser } from "./types";

interface GitHubStorage {
  github?: GitHubUser;
}

export async function loginWithGitHub(): Promise<GitHubUser | null> {
  const redirectUri = chrome.identity.getRedirectURL();

  const authUrl =
    "http://localhost:5000/auth/github/login" +
    `?redirect_uri=${encodeURIComponent(redirectUri)}`;

  return new Promise((resolve) => {
    chrome.identity.launchWebAuthFlow(
      {
        url: authUrl,
        interactive: true,
      },
      async (responseUrl) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          resolve(null);
          return;
        }

        if (!responseUrl) {
          resolve(null);
          return;
        }

        const url = new URL(responseUrl);

        const token = url.searchParams.get("token");
        const login = url.searchParams.get("login");
        const name = url.searchParams.get("name");

        if (!token || !login || !name) {
          resolve(null);
          return;
        }

        const github: GitHubUser = {
          token,
          login,
          name,
        };

        await chrome.storage.local.set({
          github,
        });

        resolve(github);
      }
    );
  });
}

export async function getGitHubUser(): Promise<GitHubUser | null> {
  const result = (await chrome.storage.local.get(
    "github"
  )) as GitHubStorage;

  return result.github ?? null;
}

export async function logoutGitHub(): Promise<void> {
  await chrome.storage.local.remove("github");
}
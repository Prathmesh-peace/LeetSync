import type { GitHubUploadResponse } from "./file.types.js";

export function parseCommit(response: GitHubUploadResponse) {
  return {
    sha: response.commit.sha,
    url: response.commit.html_url,
  };
}
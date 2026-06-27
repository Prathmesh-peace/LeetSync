import type {
  Repository,
  GitHubRepositoryResponse,
} from "./repository.types.js";

export function parseRepository(
  repo: GitHubRepositoryResponse
): Repository {
  return {
    id: repo.id,
    name: repo.name,
    fullName: repo.full_name,
    private: repo.private,
    htmlUrl: repo.html_url,
  };
}
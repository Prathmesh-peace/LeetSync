import axios from "axios";

import { parseRepository } from "./repository.parser.js";

import type {
  GitHubRepositoryResponse,
  Repository,
} from "./repository.types.js";

const GITHUB_API = "https://api.github.com";

/**
 * Fetch all repositories of the authenticated user.
 */
export async function getRepositories(
  token: string
): Promise<Repository[]> {
  const response = await axios.get<GitHubRepositoryResponse[]>(
    `${GITHUB_API}/user/repos`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.map(parseRepository);
}

/**
 * Find a repository by name.
 */
export async function findRepository(
  token: string,
  repositoryName: string
): Promise<Repository | null> {
  const repositories = await getRepositories(token);

  const repository = repositories.find(
    (repo) =>
      repo.name.toLowerCase() === repositoryName.toLowerCase()
  );

  return repository ?? null;
}

/**
 * Create a new repository.
 */
export async function createRepository(
  token: string,
  repositoryName: string
): Promise<Repository> {
  const response = await axios.post<GitHubRepositoryResponse>(
    `${GITHUB_API}/user/repos`,
    {
      name: repositoryName,
      private: false,
      auto_init: true,
      description:
        "Automatically synced LeetCode solutions using LeetSync",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return parseRepository(response.data);
}

/**
 * Returns an existing repository or creates one if it doesn't exist.
 */
export async function getOrCreateRepository(
  token: string,
  repositoryName: string
): Promise<Repository> {
  const repository = await findRepository(
    token,
    repositoryName
  );

  if (repository) {
    console.log(`✅ Repository "${repositoryName}" already exists`);
    return repository;
  }

  console.log(`📁 Creating repository "${repositoryName}"...`);

  return await createRepository(
    token,
    repositoryName
  );
}
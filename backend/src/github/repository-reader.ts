import { getRepositoryTree } from "./tree.service.js";

import type { RepositoryIndex } from "../sync/models/repository-index.js";

export async function readRepositoryIndex(
  owner: string,
  repo: string,
  token: string
): Promise<RepositoryIndex> {

  const tree = await getRepositoryTree(
    owner,
    repo,
    token
  );

  const index: RepositoryIndex = {

    totalSolved: 0,

    easy: 0,
    medium: 0,
    hard: 0,

    topics: {},

    languages: {},

  };

  console.log(tree);

  return index;
}
import type { RepositoryFile } from "../models/file.js";
import type { RepositoryIndex } from "../models/repository-index.js";

export function generateStats(
  index: RepositoryIndex
): RepositoryFile {

  return {

    path: "stats.json",

    content: JSON.stringify(index, null, 2),

  };

}
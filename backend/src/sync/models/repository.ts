import type { RepositoryFile } from "./file.js";

export interface VirtualRepository {
  files: RepositoryFile[];
}
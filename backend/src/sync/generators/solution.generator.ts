import type { SyncPayload } from "../models/sync-payload.js";
import type { RepositoryFile } from "../models/file.js";

import { languageDirectory } from "../utils/path.js";
import { languageExtension } from "../utils/language.js";

export function generateSolution(
  payload: SyncPayload
): RepositoryFile {
  return {
    path: `${languageDirectory(payload)}/Solution.${languageExtension(
      payload.submission.language
    )}`,
    content: payload.submission.code,
  };
}
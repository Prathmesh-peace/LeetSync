import type { SyncPayload } from "../models/sync-payload.js";
import type { RepositoryFile } from "../models/file.js";

import { problemDirectory } from "../utils/path.js";

export function generateMetadata(
  payload: SyncPayload
): RepositoryFile {

  return {

    path: `${problemDirectory(payload)}/metadata.json`,

    content: JSON.stringify(
      {
        id: payload.problem.id,
        title: payload.problem.title,
        slug: payload.problem.slug,
        difficulty: payload.problem.difficulty,
        topics: payload.problem.topics,

        language: payload.submission.language,

        runtime: payload.submission.runtime,
        memory: payload.submission.memory,

        timestamp: payload.submission.timestamp,

        url: payload.problem.url,
      },
      null,
      2
    ),

  };

}
import type { SyncPayload } from "../models/sync-payload.js";
import type { RepositoryIndex } from "../models/repository-index.js";

export function buildRepositoryIndex(
  payload: SyncPayload
): RepositoryIndex {

  const index: RepositoryIndex = {

    totalSolved: 1,

    easy: 0,
    medium: 0,
    hard: 0,

    topics: {},

    languages: {},

  };

  switch (payload.problem.difficulty) {

    case "Easy":
      index.easy++;
      break;

    case "Medium":
      index.medium++;
      break;

    case "Hard":
      index.hard++;
      break;

  }

  for (const topic of payload.problem.topics) {

    index.topics[topic] = [
      payload.problem.title,
    ];

  }

  index.languages[payload.submission.language] = [
    payload.problem.title,
  ];

  return index;

}
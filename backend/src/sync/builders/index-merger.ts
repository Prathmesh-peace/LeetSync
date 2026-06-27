import type { RepositoryIndex } from "../models/repository-index.js";
import type { SyncPayload } from "../models/sync-payload.js";

export function mergeSubmission(
  index: RepositoryIndex,
  payload: SyncPayload
) {

  index.totalSolved++;

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

    if (!index.topics[topic]) {
      index.topics[topic] = [];
    }

    if (!index.topics[topic].includes(payload.problem.title)) {
      index.topics[topic].push(payload.problem.title);
    }

  }

  const language = payload.submission.language;

  if (!index.languages[language]) {
    index.languages[language] = [];
  }

  if (!index.languages[language].includes(payload.problem.title)) {
    index.languages[language].push(payload.problem.title);
  }

}
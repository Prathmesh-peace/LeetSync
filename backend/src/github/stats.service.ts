import { readFile, syncFile } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

export interface RepositoryStats {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
}

async function getStats(
  request: SyncFileRequest
): Promise<RepositoryStats> {
  const content = await readFile({
    ...request,
    path: "stats.json",
  });

  if (!content) {
    return {
      totalSolved: 0,
      easy: 0,
      medium: 0,
      hard: 0,
    };
  }

  return JSON.parse(content);
}

export async function updateStats(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<void> {
  const stats = await getStats(request);

  stats.totalSolved++;

  switch (payload.problem.difficulty) {
    case "Easy":
      stats.easy++;
      break;

    case "Medium":
      stats.medium++;
      break;

    case "Hard":
      stats.hard++;
      break;
  }

  await syncFile({
    ...request,
    path: "stats.json",
    message: "Update repository statistics",
    content: JSON.stringify(stats, null, 2),
  });
}
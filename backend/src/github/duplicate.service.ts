import { fileExists } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

export async function isDuplicate(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<boolean> {
  const problemFolder = `${payload.problem.id.padStart(4, "0")}-${payload.problem.slug}`;

  return fileExists({
    ...request,
    path: `problems/${problemFolder}/metadata.json`,
  });
}
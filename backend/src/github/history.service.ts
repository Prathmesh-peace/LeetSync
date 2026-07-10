import { readFile, syncFile } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

import { languageExtension } from "../sync/utils/language.js";

function historyFolder(metadata: {
  timestamp: number;
  submissionId: number;
}): string {
  // Supports both Unix seconds and Unix milliseconds
  const timestamp =
    metadata.timestamp < 1_000_000_000_000
      ? metadata.timestamp * 1000
      : metadata.timestamp;

  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}_${hour}-${minute}-${second}_${metadata.submissionId}`;
}

export async function archiveSolution(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<void> {

  const problemFolder =
    `${payload.problem.id.padStart(4, "0")}-${payload.problem.slug}`;

  const language = payload.submission.language;

  const extension = languageExtension(language);

  const solutionPath =
    `problems/${problemFolder}/${language}/Solution.${extension}`;

  const metadataPath =
    `problems/${problemFolder}/${language}/metadata.json`;

  const solution = await readFile({
    ...request,
    path: solutionPath,
  });

  const metadata = await readFile({
    ...request,
    path: metadataPath,
  });

  // Nothing to archive
  if (!solution || !metadata) {
    return;
  }

  const currentMetadata = JSON.parse(metadata);

  const folder = historyFolder(currentMetadata);

  // Archive previous solution
  await syncFile({
    ...request,
    path: `problems/${problemFolder}/${language}/history/${folder}/Solution.${extension}`,
    message: `Archive ${payload.problem.title} (${language})`,
    content: solution,
  });

  // Archive previous metadata
  await syncFile({
    ...request,
    path: `problems/${problemFolder}/${language}/history/${folder}/metadata.json`,
    message: `Archive ${payload.problem.title} (${language})`,
    content: metadata,
  });
}
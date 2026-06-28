import { readFile, syncFile } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

async function getLanguage(
  request: SyncFileRequest,
  language: string
): Promise<string[]> {
  const content = await readFile({
    ...request,
    path: `languages/${language}.md`,
  });

  if (!content) {
    return [];
  }

  return content
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.substring(2));
}

export async function updateLanguages(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<void> {
  const language = payload.submission.language;

  const problems = await getLanguage(
    request,
    language
  );

  if (!problems.includes(payload.problem.title)) {
    problems.push(payload.problem.title);
  }

  const markdown = [
    `# ${language}`,
    "",
    ...problems.map((problem) => `- ${problem}`),
    "",
  ].join("\n");

  await syncFile({
    ...request,
    path: `languages/${language}.md`,
    message: `Update language: ${language}`,
    content: markdown,
  });
}
import { readFile, syncFile } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

async function getDifficulty(
  request: SyncFileRequest,
  difficulty: string
): Promise<string[]> {
  const content = await readFile({
    ...request,
    path: `difficulty/${difficulty}.md`,
  });

  if (!content) {
    return [];
  }

  return content
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.substring(2));
}

export async function updateDifficulty(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<void> {

  const difficulty = payload.problem.difficulty;

  const problems = await getDifficulty(
    request,
    difficulty
  );

  if (!problems.includes(payload.problem.title)) {
    problems.push(payload.problem.title);
  }

  const markdown = [
    `# ${difficulty} Problems`,
    "",
    ...problems.map(problem => `- ${problem}`),
    "",
  ].join("\n");

  await syncFile({
    ...request,
    path: `difficulty/${difficulty}.md`,
    message: `Update ${difficulty} problems`,
    content: markdown,
  });

}
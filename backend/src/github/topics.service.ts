import { readFile, syncFile } from "./file.service.js";

import type { SyncFileRequest } from "./file.types.js";
import type { SyncPayload } from "../sync/models/sync-payload.js";

async function getTopic(
  request: SyncFileRequest,
  topic: string
): Promise<string[]> {
  const content = await readFile({
    ...request,
    path: `topics/${topic}.md`,
  });

  if (!content) {
    return [];
  }

  return content
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.substring(2));
}

export async function updateTopics(
  request: SyncFileRequest,
  payload: SyncPayload
): Promise<void> {
  for (const topic of payload.problem.topics) {
    const problems = await getTopic(request, topic);

    if (!problems.includes(payload.problem.title)) {
      problems.push(payload.problem.title);
    }

    const markdown = [
      `# ${topic}`,
      "",
      ...problems.map((problem) => `- ${problem}`),
      "",
    ].join("\n");

    await syncFile({
      ...request,
      path: `topics/${topic}.md`,
      message: `Update topic: ${topic}`,
      content: markdown,
    });
  }
}
import type { SyncPayload } from "../models/sync-payload.js";
import type { RepositoryFile } from "../models/file.js";

import { problemDirectory } from "../utils/path.js";

export function generateProblemReadme(
  payload: SyncPayload
): RepositoryFile {

  const p = payload.problem;

  let content = `# ${p.title}

## Difficulty

${p.difficulty}

## Topics

${p.topics.map(topic => `- ${topic}`).join("\n")}

## Problem

${p.statement}
`;

  if (p.examples) {
    content += `

## Examples

${p.examples}
`;
  }

  if (p.constraints) {
    content += `

## Constraints

${p.constraints}
`;
  }

  if (p.hints?.length) {
    content += `

## Hints

${p.hints.map(h => `- ${h}`).join("\n")}
`;
  }

  content += `

## LeetCode

${p.url}
`;

  return {
    path: `${problemDirectory(payload)}/README.md`,
    content,
  };
}
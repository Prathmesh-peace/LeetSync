import type { SyncPayload } from "../models/sync-payload.js";
import type { VirtualRepository } from "../models/repository.js";

import { generateSolution } from "../generators/solution.generator.js";
import { generateProblemReadme } from "../generators/readme.generator.js";
import { generateMetadata } from "../generators/metadata.generator.js";

export function buildRepository(
  payload: SyncPayload
): VirtualRepository {
  return {
    files: [
      generateSolution(payload),
      generateProblemReadme(payload),
      generateMetadata(payload),
    ],
  };
}
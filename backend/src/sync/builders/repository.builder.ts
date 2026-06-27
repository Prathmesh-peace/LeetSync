import type { SyncPayload } from "../models/sync-payload.js";
import type { VirtualRepository } from "../models/repository.js";

import { buildRepositoryIndex } from "./repository-index.builder.js";

import { generateSolution } from "../generators/solution.generator.js";
import { generateProblemReadme } from "../generators/readme.generator.js";
import { generateMetadata } from "../generators/metadata.generator.js";

import { generateTopics } from "../generators/topics.generator.js";
import { generateLanguages } from "../generators/languages.generator.js";
import { generateStats } from "../generators/stats.generator.js";
import { generateRootReadme } from "../generators/root-readme.generator.js";

export function buildRepository(
  payload: SyncPayload
): VirtualRepository {

  const index = buildRepositoryIndex(payload);

  return {

    files: [

      generateSolution(payload),

      generateProblemReadme(payload),

      generateMetadata(payload),

      ...generateTopics(index),

      ...generateLanguages(index),

      generateStats(index),

      generateRootReadme(index),

    ],

  };

}
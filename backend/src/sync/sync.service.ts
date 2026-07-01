import { buildRepository } from "./builders/repository.builder.js";

import { uploadRepository } from "../github/github.uploader.js";
import { getOrCreateRepository } from "../github/repository.service.js";

import { updateStats } from "../github/stats.service.js";
import { updateTopics } from "../github/topics.service.js";
import { updateLanguages } from "../github/languages.service.js";
import { updateDifficulty } from "../github/difficulty.service.js";
import { updateReadme } from "../github/readme.service.js";
import { isDuplicate } from "../github/duplicate.service.js";

import type { SyncPayload } from "./models/sync-payload.js";
import type { SyncFileRequest } from "../github/file.types.js";

export async function syncRepository(
  payload: SyncPayload,
  token: string,
  owner: string,
  repository: string
) {
  // Ensure repository exists
  await getOrCreateRepository(
    token,
    repository
  );

  // Shared GitHub request object
  const request: SyncFileRequest = {
    owner,
    repository,
    token,
    path: "",
    message: "",
    content: "",
  };

  // Check if problem already exists
  const duplicate = await isDuplicate(
    request,
    payload
  );

  // Always build the latest problem files
  const virtualRepository = buildRepository(payload);

  // Always upload the latest solution, README and metadata
  await uploadRepository(
    owner,
    repository,
    token,
    virtualRepository
  );

  // Update repository-wide files ONLY for new problems
  if (!duplicate) {
    await updateStats(
      request,
      payload
    );

    await updateTopics(
      request,
      payload
    );

    await updateDifficulty(
      request,
      payload
    );

    await updateReadme(
      request
    );

    console.log(
      `✅ Successfully synchronized "${payload.problem.title}"`
    );
  } else {
    console.log(
      `♻️ Updated solution for "${payload.problem.title}"`
    );
  }

  // ✅ Always update language index
  await updateLanguages(
    request,
    payload
  );
}
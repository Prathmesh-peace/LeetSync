import { buildRepository } from "./builders/repository.builder.js";

import { uploadRepository } from "../github/github.uploader.js";
import { getOrCreateRepository } from "../github/repository.service.js";

import { updateStats } from "../github/stats.service.js";
import { updateTopics } from "../github/topics.service.js";
import { updateLanguages } from "../github/languages.service.js";
import { updateDifficulty } from "../github/difficulty.service.js";
import { updateReadme } from "../github/readme.service.js";

import { isProblemDuplicate } from "../github/problem-duplicate.service.js";
import { isLanguageDuplicate } from "../github/language-duplicate.service.js";
import { archiveSolution } from "../github/history.service.js";

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

  // Check whether problem already exists
  const problemDuplicate =
    await isProblemDuplicate(
      request,
      payload
    );

  // Check whether this language already exists
  const languageDuplicate =
    await isLanguageDuplicate(
      request,
      payload
    );

  // Archive previous solution of the same language
  if (languageDuplicate) {
    await archiveSolution(
      request,
      payload
    );
  }

  // Build latest repository files
  const virtualRepository =
    buildRepository(payload);

  // Upload latest solution, metadata and README
  await uploadRepository(
    owner,
    repository,
    token,
    virtualRepository
  );

  // Update repository-wide files ONLY once per problem
  if (!problemDuplicate) {
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
  }

  // Always update language index
  await updateLanguages(
    request,
    payload
  );

  // Log result
  if (languageDuplicate) {
    console.log(
      `♻️ Archived previous ${payload.submission.language} solution`
    );
  } else {
    console.log(
      `➕ Added ${payload.submission.language} solution`
    );
  }
}
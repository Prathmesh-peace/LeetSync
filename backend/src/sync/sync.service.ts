import { buildRepository } from "./builders/repository.builder.js";

import { uploadRepository } from "../github/github.uploader.js";
import { getOrCreateRepository } from "../github/repository.service.js";

import type { SyncPayload } from "./models/sync-payload.js";

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

  // Build virtual repository
  const virtualRepository = buildRepository(payload);

  // Upload files
  await uploadRepository(
    owner,
    repository,
    token,
    virtualRepository
  );
}
import { buildRepository } from "./builders/repository.builder.js";
import { uploadRepository } from "../github/github.uploader.js";

import type { SyncPayload } from "./models/sync-payload.js";

export async function syncRepository(
  payload: SyncPayload,
  token: string,
  owner: string,
  repository: string
) {
  const virtualRepository = buildRepository(payload);

  await uploadRepository(
    owner,
    repository,
    token,
    virtualRepository
  );
}
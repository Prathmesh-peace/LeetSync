import type { VirtualRepository } from "../sync/models/repository.js";

import { syncFile } from "./file.service.js";

export async function uploadRepository(
  owner: string,
  repository: string,
  token: string,
  virtualRepository: VirtualRepository
) {
  for (const file of virtualRepository.files) {
    await syncFile({
      owner,
      repository,
      token,
      path: file.path,
      content: file.content,
      message: `Add ${file.path}`,
    });

    console.log(`✅ ${file.path}`);
  }
}
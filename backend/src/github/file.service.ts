import axios from "axios";

import type {
  SyncFileRequest,
  GitHubContentResponse,
  GitHubUploadResponse,
} from "./file.types.js";

const API = "https://api.github.com";

export async function getFile(
  request: SyncFileRequest
): Promise<GitHubContentResponse | null> {
  try {
    const response = await axios.get<GitHubContentResponse>(
      `${API}/repos/${request.owner}/${request.repository}/contents/${request.path}`,
      {
        headers: {
          Authorization: `Bearer ${request.token}`,
        },
      }
    );

    return response.data;
  } catch {
    return null;
  }
}

export async function fileExists(
  request: SyncFileRequest
): Promise<boolean> {
  const file = await getFile(request);

  return file !== null;
}

export async function readFile(
  request: SyncFileRequest
): Promise<string | null> {
  const file = await getFile(request);

  if (!file) {
    return null;
  }

  return Buffer.from(
    file.content,
    "base64"
  ).toString("utf-8");
}

export async function createFile(
  request: SyncFileRequest
): Promise<GitHubUploadResponse> {
  const response = await axios.put<GitHubUploadResponse>(
    `${API}/repos/${request.owner}/${request.repository}/contents/${request.path}`,
    {
      message: request.message,
      content: Buffer.from(request.content).toString("base64"),
    },
    {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    }
  );

  return response.data;
}

export async function updateFile(
  request: SyncFileRequest,
  sha: string
): Promise<GitHubUploadResponse> {
  const response = await axios.put<GitHubUploadResponse>(
    `${API}/repos/${request.owner}/${request.repository}/contents/${request.path}`,
    {
      message: request.message,
      content: Buffer.from(request.content).toString("base64"),
      sha,
    },
    {
      headers: {
        Authorization: `Bearer ${request.token}`,
      },
    }
  );

  return response.data;
}

export async function syncFile(
  request: SyncFileRequest
): Promise<GitHubUploadResponse> {
  const file = await getFile(request);

  if (!file) {
    return createFile(request);
  }

  return updateFile(request, file.sha);
}
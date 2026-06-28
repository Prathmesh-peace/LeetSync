export interface SyncFileRequest {
  owner: string;
  repository: string;

  path: string;
  content: string;

  message: string;

  token: string;
}

export interface GitHubFile {
  sha: string;
}

export interface GitHubContentResponse {
  sha: string;
  content: string;
  encoding: string;
}

export interface GitHubUploadResponse {
  content: {
    sha: string;
  };

  commit: {
    sha: string;
    html_url: string;
  };
}
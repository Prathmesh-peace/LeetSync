export interface SubmissionDetails {
  runtime: string | null;
  runtimeDisplay: string;
  memory: string | null;
  memoryDisplay: string;

  code: string;
  timestamp: number;
  statusCode: number;

  user: {
    username: string;
  };

  lang: {
    name: string;
    verboseName: string;
  };

  question: {
    questionId: string;
    titleSlug: string;
  };
}

export interface SubmissionResponse {
  submissionDetails: SubmissionDetails;
}

export interface SubmissionGraphQLResponse {
  data: SubmissionResponse;
}
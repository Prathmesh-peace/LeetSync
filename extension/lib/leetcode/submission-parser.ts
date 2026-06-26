import type { SubmissionGraphQLResponse } from "./submission-types";
import type { SubmissionData } from "./submission-data";

export function parseSubmission(
  response: SubmissionGraphQLResponse,
  submissionId: number
): SubmissionData {

  const submission = response.data.submissionDetails;

  return {
    submissionId,

    code: submission.code,

    language: submission.lang.name,

    runtime: submission.runtimeDisplay,

    memory: submission.memoryDisplay,

    timestamp: submission.timestamp,

    username: submission.user.username,

    statusCode: submission.statusCode,

    questionId: submission.question.questionId,

    titleSlug: submission.question.titleSlug,
  };
}
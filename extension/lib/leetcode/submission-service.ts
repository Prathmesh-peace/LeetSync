import { graphqlRequest } from "./graphql";
import { parseSubmission } from "./submission-parser";
import { SUBMISSION_QUERY } from "./submission-query";

import type { SubmissionGraphQLResponse } from "./submission-types";
import type { SubmissionData } from "./submission-data";

export async function fetchSubmission(
  submissionId: number
): Promise<SubmissionData> {

  const response = await graphqlRequest<SubmissionGraphQLResponse>(
    SUBMISSION_QUERY,
    {
      submissionId,
    }
  );

  return parseSubmission(
    response,
    submissionId
  );
}
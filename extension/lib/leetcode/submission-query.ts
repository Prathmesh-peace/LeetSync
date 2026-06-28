export const SUBMISSION_QUERY = `
query submissionDetails($submissionId: Int!) {
  submissionDetails(submissionId: $submissionId) {

    runtime
    runtimeDisplay

    memory
    memoryDisplay

    code

    timestamp

    statusCode

    user {
      username
    }

    lang {
      name
      verboseName
    }

    question {
      questionId
      titleSlug
    }
  }
}
`;
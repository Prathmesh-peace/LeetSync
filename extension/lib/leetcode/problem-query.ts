export const PROBLEM_QUERY = `
query getQuestionDetail($titleSlug: String!) {
  question(titleSlug: $titleSlug) {
    questionFrontendId
    title
    titleSlug
    difficulty
    content

    topicTags {
      name
      slug
    }

    hints
  }
}
`;
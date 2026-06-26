import type { GraphQLResponse } from "./api-types";
import type { ProblemData } from "./problem-types";

export function parseProblem(
  response: GraphQLResponse,
  url: string
): ProblemData {

  const question = response.data.question;

  return {
    id: question.questionFrontendId,
    title: question.title,
    slug: question.titleSlug,
    difficulty: question.difficulty,
    topics: question.topicTags.map(topic => topic.name),
    statement: question.content,
    hints: question.hints,
    url,
  };
}
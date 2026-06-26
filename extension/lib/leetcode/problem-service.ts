import { graphqlRequest } from "./graphql";
import { parseProblem } from "./problem-parser";
import { PROBLEM_QUERY } from "./problem-query";

import type { GraphQLResponse } from "./api-types";
import type { ProblemData } from "./problem-types";

export async function fetchProblem(
  slug: string,
  url: string
): Promise<ProblemData> {

  const response = await graphqlRequest<GraphQLResponse>(
    PROBLEM_QUERY,
    {
      titleSlug: slug,
    }
  );

  return parseProblem(response, url);
}
const GRAPHQL_ENDPOINT = "https://leetcode.com/graphql";

export async function graphqlRequest<T>(
  query: string,
  variables: Record<string, unknown>
): Promise<T> {

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL Error: ${response.status}`);
  }

  return response.json();
}
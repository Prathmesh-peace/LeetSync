import { parseCheck } from "./parser";
import type { CheckResponse } from "./types";

export async function checkSubmission(
  submissionId: number
) {
  const response = await fetch(
    `https://leetcode.com/submissions/detail/${submissionId}/v2/check/`,
    {
      credentials: "include",
    }
  );

  const json =
    (await response.json()) as CheckResponse;

  return parseCheck(json);
}
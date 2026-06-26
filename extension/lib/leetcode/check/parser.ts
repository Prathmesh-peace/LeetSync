import type { CheckResponse, CheckResult } from "./types";

export function parseCheck(
  response: CheckResponse
): CheckResult {

  return {
    accepted: response.status_msg === "Accepted",

    finished:
      response.state === "SUCCESS" ||
      response.state === "FAILURE",
  };
}
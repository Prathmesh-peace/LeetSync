export interface SubmissionCheckResponse {
  finished?: boolean;
  state?: string;
  status_code?: number;
  status_msg?: string;
}

const POLL_INTERVAL = 1000;
const MAX_ATTEMPTS = 60;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitUntilFinished(
  submissionId: number
): Promise<SubmissionCheckResponse> {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {

    const response = await fetch(
      `https://leetcode.com/submissions/detail/${submissionId}/check/`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to check submission status (${response.status})`
      );
    }

    const result: SubmissionCheckResponse = await response.json();

    console.log("📊 Submission Status:", result);

    // Still judging
    if (!result.finished) {
      console.log("⏳ Submission still judging...");
      await sleep(POLL_INTERVAL);
      continue;
    }

    console.log("✅ Final verdict received.");

    return result;
  }

  throw new Error(
    "Timed out waiting for LeetCode submission verdict."
  );
}
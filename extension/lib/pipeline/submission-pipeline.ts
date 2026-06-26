import { checkSubmission } from "../leetcode/check/service";
import { fetchSubmission } from "../leetcode/submission-service";
import { fetchProblem } from "../leetcode/problem-service";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class SubmissionPipeline {
  async run(submissionId: number) {
    console.log("🚀 Pipeline started");

    while (true) {
      const check =
        await checkSubmission(submissionId);

      console.log(check);

      if (!check.finished) {
        await sleep(1000);
        continue;
      }

      if (!check.accepted) {
        console.log("❌ Not Accepted");
        return;
      }

      break;
    }

    const submission =
      await fetchSubmission(submissionId);

    const problem =
      await fetchProblem(
        submission.titleSlug,
        `https://leetcode.com/problems/${submission.titleSlug}/description/`
      );

    console.log({
      problem,
      submission,
    });
  }
}
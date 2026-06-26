import { fetchProblem } from "../leetcode/problem-service";
import { fetchSubmission } from "../leetcode/submission-service";
import type { SyncPayload } from "./sync_payload";

export class SubmissionPipeline {
  async run(submissionId: number) {
    console.log("🚀 Pipeline started");

    console.log("📥 Fetching submission...");

    const submission = await fetchSubmission(submissionId);

    console.log("✅ Submission fetched");

    // 16 = Accepted
    if (submission.statusCode !== 16) {
      console.log("❌ Submission not accepted");
      return;
    }

    console.log("✅ Accepted!");

    console.log("📥 Fetching problem...");

    const problem = await fetchProblem(
      submission.titleSlug,
      `https://leetcode.com/problems/${submission.titleSlug}/description/`
    );

    console.log("✅ Problem fetched");

    const payload: SyncPayload = {
      problem,
      submission,
    };

    console.log("📦 Sync Payload");
    console.log(payload);

    console.log("🎉 Pipeline completed!");
    return payload
    // Phase 5
    // await github.sync(payload);
  }
}
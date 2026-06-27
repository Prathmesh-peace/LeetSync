import { fetchProblem } from "../leetcode/problem-service";
import { fetchSubmission } from "../leetcode/submission-service";

import { getGitHubUser } from "../github/auth";

import type { SyncPayload } from "./sync_payload";

export class SubmissionPipeline {
  async run(submissionId: number) {
    console.log("🚀 Pipeline started");

    console.log("📥 Fetching submission...");

    const submission = await fetchSubmission(submissionId);

    console.log("✅ Submission fetched");

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

    const github = await getGitHubUser();

    if (!github) {
      console.log("❌ GitHub not connected");
      return;
    }

    console.log("☁️ Syncing to backend...");

    const response = await fetch("http://localhost:5000/sync", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${github.token}`,
      },
      body: JSON.stringify({
        owner: github.login,
        repository: "leetcode",
        payload,
      }),
    });

    const result = await response.json();

    console.log("✅ Backend Response");
    console.log(result);

    console.log("🎉 Pipeline completed!");

    return payload;
  }
}
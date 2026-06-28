import { SubmissionDetector } from "../lib/observer/submission-detector";
import { SubmissionPipeline } from "../lib/pipeline/submission-pipeline";

export default defineContentScript({
  matches: ["https://leetcode.com/problems/*"],

  runAt: "document_idle",

  main() {
    console.log("🚀 LeetSync Loaded");

    const detector = new SubmissionDetector();

    const pipeline =
      new SubmissionPipeline();

    detector.start((submissionId) => {
      pipeline.run(submissionId);
    });
  },
});
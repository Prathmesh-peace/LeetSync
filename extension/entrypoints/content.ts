import { SubmissionDetector } from "../lib/observer/submission-detector";

export default defineContentScript({
  matches: ["https://leetcode.com/problems/*"],
  runAt: "document_idle",

  main() {
    console.log("🚀 LeetSync Loaded");

    const detector = new SubmissionDetector();

    detector.start();
  },
});
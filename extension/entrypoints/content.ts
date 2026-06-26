import { fetchProblem } from "../lib/leetcode/service";

export default defineContentScript({
  matches: ["https://leetcode.com/problems/*"],

  runAt: "document_idle",

  async main() {

    console.log("🚀 LeetSync Loaded");

    const slug = window.location.pathname.split("/")[2];

    const problem = await fetchProblem(
      slug,
      window.location.href
    );

    console.log(problem);

  },
});
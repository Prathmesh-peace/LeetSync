import type { ProblemData } from "../leetcode/problem-types";
import type { SubmissionData } from "../leetcode/submission-data";

export interface SyncPayload {
  problem: ProblemData;
  submission: SubmissionData;
}
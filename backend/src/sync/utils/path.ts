import type { SyncPayload } from "../models/sync-payload.js";

/**
 * Formats a problem ID with leading zeros.
 *
 * Examples:
 * 1 -> 0001
 * 42 -> 0042
 * 121 -> 0121
 */
export function formatProblemId(id: string): string {
  return id.padStart(4, "0");
}

/**
 * Returns the directory path for a problem.
 *
 * Example:
 * problems/0001-two-sum
 */
export function problemDirectory(
  payload: SyncPayload
): string {
  return `problems/${formatProblemId(payload.problem.id)}-${payload.problem.slug}`;
}
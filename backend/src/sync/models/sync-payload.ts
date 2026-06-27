export interface SyncPayload {
  problem: {
    id: string;
    title: string;
    slug: string;
    difficulty: "Easy" | "Medium" | "Hard";
    topics: string[];
    statement: string;
    url: string;
    examples?: string;
    constraints?: string;
    hints?: string[];
  };

  submission: {
    submissionId: number;
    code: string;
    language: string;
    runtime: string;
    memory: string;
    timestamp: number;
    username: string;
  };
}
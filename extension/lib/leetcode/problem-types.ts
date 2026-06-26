export interface ProblemData {
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

  language?: string;

  solution?: string;
}
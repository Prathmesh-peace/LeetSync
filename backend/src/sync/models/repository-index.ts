export interface RepositoryIndex {
  totalSolved: number;

  easy: number;
  medium: number;
  hard: number;

  topics: Record<string, string[]>;

  languages: Record<string, string[]>;
}
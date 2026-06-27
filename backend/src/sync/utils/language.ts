/**
 * Maps LeetCode language names to file extensions.
 */
export function languageExtension(
  language: string
): string {
  switch (language.toLowerCase()) {
    case "java":
      return "java";

    case "python":
    case "python3":
      return "py";

    case "cpp":
    case "c++":
      return "cpp";

    case "c":
      return "c";

    case "javascript":
      return "js";

    case "typescript":
      return "ts";

    case "go":
      return "go";

    case "rust":
      return "rs";

    case "kotlin":
      return "kt";

    case "swift":
      return "swift";

    case "php":
      return "php";

    case "ruby":
      return "rb";

    case "scala":
      return "scala";

    default:
      return "txt";
  }
}
export interface TopicTag {
  name: string;
  slug: string;
}

export interface Question {
  questionFrontendId: string;
  title: string;
  titleSlug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  content: string;
  topicTags: TopicTag[];
  hints: string[];
}

export interface QuestionResponse {
  question: Question;
}

export interface GraphQLResponse {
  data: QuestionResponse;
}
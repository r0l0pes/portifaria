/** Key performance metric displayed in case study cards and modals. */
export interface Metric {
  label: string;
  value: string;
  description: string;
  chartData?: { name: string; value: number }[];
}

/** Full case study with challenge, approach, outcomes, and lessons. */
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  summary: string;
  challenge: string;
  approach: {
    title: string;
    description: string;
  }[];
  outcomes: {
    title: string;
    description: string;
  }[];
  keyMetric: Metric;
  lessons: {
    title: string;
    description: string;
  }[];
}

/** Single entry in the professional experience timeline. */
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

/** Discriminated union for structured blog post content blocks. */
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

/** Blog post with metadata, tags, and structured content blocks. */
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: ContentBlock[];
}
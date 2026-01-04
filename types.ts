export interface Metric {
  label: string;
  value: string;
  description: string;
  chartData?: { name: string; value: number }[];
}

export interface CaseStudy {
  id: string;
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

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export type ContentBlock = 
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: ContentBlock[];
}
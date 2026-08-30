export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  metrics: string[];
  tone: string;
  image: string;
  tags: string[];
  year: string;
  role: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [];

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    team: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  image: string;
  readTime: string;
  publishedAt: string;
  featured: boolean;
}

export const categories = [
  "All",
  "AI",
  "Data Science",
  "Web Development",
  "Programming",
  "Career"
];

export const blogPosts: BlogPost[] = [];

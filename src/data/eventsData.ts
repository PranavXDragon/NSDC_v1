export interface EventData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  emoji: string;
  date: string;
  endDate?: string;
  year: string;
  category: string;
  categoryColor: string;
  description: string;
  fullDescription: string;
  venue: string;
  venueAddress?: string;
  participants?: string;
  organizers?: string[];
  highlights: string[];
  image?: string;
  prizes?: {
    position: string;
    prize: string;
    emoji: string;
  }[];
  gallery?: string[];
  tags: string[];
  links?: {
    label: string;
    url: string;
  }[];
  schedule?: {
    time: string;
    activity: string;
  }[];
  speakers?: {
    name: string;
    role: string;
    company?: string;
  }[];
  previewUrl?: string;
  isUpcoming?: boolean;
  isFeatured?: boolean;
  registrationUrl?: string;
  registrationDeadline?: string;
}

export const eventsData: EventData[] = [
  {
    id: "chapter-inauguration",
    slug: "chapter-inauguration",
    title: "CHAPTER INAUGURATION",
    subtitle: "The official beginning of NSDC SCET.",
    emoji: "🎉",
    date: "2026-08-01",
    year: "2026",
    category: "Ceremony",
    categoryColor: "#00A3FF",
    description: "The official beginning of NSDC SCET.",
    fullDescription: "The official beginning of NSDC SCET.",
    venue: "Suryodaya College of Engineering & Technology",
    highlights: [],
    tags: ["Inauguration", "Beginning", "Community"],
    image: "/events/inugration.jpg",
    isUpcoming: false
  },
  {
    id: "installation-ceremony",
    slug: "installation-ceremony",
    title: "INSTALLATION CEREMONY",
    subtitle: "The formal installation of the chapter leadership.",
    emoji: "🎓",
    date: "2026-08-01",
    year: "2026",
    category: "Ceremony",
    categoryColor: "#00A3FF",
    description: "The formal installation of the chapter leadership.",
    fullDescription: "The formal installation of the chapter leadership.",
    venue: "Suryodaya College of Engineering & Technology",
    highlights: [],
    tags: ["Leadership", "Ceremony", "Core Team"],
    image: "/events/installation.jpg",
    isUpcoming: false
  },
  {
    id: "first-community-meetup",
    slug: "first-community-meetup",
    title: "FIRST COMMUNITY MEETUP",
    subtitle: "Our first gathering of students interested in Data Science, AI, and technology.",
    emoji: "🤝",
    date: "2026-08-15",
    year: "2026",
    category: "Community",
    categoryColor: "#22c55e",
    description: "Our first gathering of students interested in Data Science, AI, and technology.",
    fullDescription: "Our first gathering of students interested in Data Science, AI, and technology.",
    venue: "Suryodaya College of Engineering & Technology",
    highlights: [],
    tags: ["Meetup", "Networking", "AI"],
    image: "/events/coming-soon.avif",
    isUpcoming: false
  },
  {
    id: "first-workshop",
    slug: "first-workshop",
    title: "FIRST WORKSHOP",
    subtitle: "Coming Soon",
    emoji: "💻",
    date: "TBA",
    year: "2026",
    category: "Workshop",
    categoryColor: "#f59e0b",
    description: "Coming Soon",
    fullDescription: "Coming Soon",
    venue: "TBA",
    highlights: [],
    tags: ["Workshop", "Learning", "Coming Soon"],
    image: "/events/coming-soon.avif",
    isUpcoming: false
  },
  {
    id: "first-hackathon",
    slug: "first-hackathon",
    title: "FIRST HACKATHON / CHALLENGE",
    subtitle: "Coming Soon",
    emoji: "🚀",
    date: "TBA",
    year: "2026",
    category: "Hackathon",
    categoryColor: "#ef4444",
    description: "Coming Soon",
    fullDescription: "Coming Soon",
    venue: "TBA",
    highlights: [],
    tags: ["Hackathon", "Challenge", "Coming Soon"],
    image: "/events/coming-soon.avif",
    isUpcoming: false
  },
  {
    id: "technical-session",
    slug: "technical-session",
    title: "TECHNICAL SESSION",
    subtitle: "Coming Soon",
    emoji: "⚡",
    date: "TBA",
    year: "2026",
    category: "Tech Talk",
    categoryColor: "#8b5cf6",
    description: "Coming Soon",
    fullDescription: "Coming Soon",
    venue: "TBA",
    highlights: [],
    tags: ["Tech Talk", "Session", "Coming Soon"],
    image: "/events/coming-soon.avif",
    isUpcoming: false
  }
];

export function getEventBySlug(slug: string): EventData | undefined {
  return eventsData.find((event) => event.slug === slug);
}

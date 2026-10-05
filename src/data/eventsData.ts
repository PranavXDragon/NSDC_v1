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
    id: "build-x",
    slug: "build-x",
    title: "BUILD-X",
    subtitle: "Design. Innovate. Build. Impact.",
    emoji: "🚀",
    date: "2026-09-22",
    year: "2026",
    category: "Hackathon",
    categoryColor: "#ef4444",
    description: "A real-world problem-solving challenge to design and build a functional full-stack solution.",
    fullDescription: "Get ready for an Intercollegiate Technical Event organized by Association of Computer Engineering Students Forum (ACES) & National Student Data Corps (NSDC). Build-X is a real-world problem-solving challenge where teams will be given a problem scenario and must think, design, and build a functional full-stack solution using their technical skills.",
    venue: "Erica & Eureka Hall, SCET, Nagpur",
    highlights: [
      "Overwhelming response with top talent from various colleges.",
      "Fierce competition focused on real-world problem-solving.",
      "Innovative full-stack solutions built from scratch.",
      "Exciting cash prizes and goodies awarded to the winners."
    ],
    gallery: [
      "/events/buildx/1.jpeg",
      "/events/buildx/2.jpeg",
      "/events/buildx/3.jpeg",
      "/events/buildx/4.jpeg",
      "/events/buildx/5.jpeg",
      "/events/buildx/6.jpeg",
      "/events/buildx/7.jpeg",
      "/events/buildx/8.jpeg",
      "/events/buildx/9.jpeg",
      "/events/buildx/10.jpeg",
      "/events/buildx/11.jpeg",
      "/events/buildx/12.jpeg",
      "/events/buildx/13.jpeg",
      "/events/buildx/14.jpeg",
      "/events/buildx/15.jpeg",
      "/events/buildx/16.jpeg"
    ],
    tags: ["Hackathon", "Build-X", "Technical Event"],
    image: "/events/buildx/1.jpeg",
    isUpcoming: false,
    registrationUrl: "https://aces.scetngp.com",
    organizers: ["ACES", "NSDC"],
    participants: "Team Size: 2-4"
  },

];

export function getEventBySlug(slug: string): EventData | undefined {
  return eventsData.find((event) => event.slug === slug);
}

import { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore innovative projects built by NSDC members — from web apps to AI solutions, robotics to sustainability tech.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}

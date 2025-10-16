import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "kats-interiors",
    title: "Kat’s Interiors Web Presence",
    summary:
      "Responsive marketing site for a local business with clear services and contact, optimized for performance and SEO.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    links: {
      live: "#",
      repo: "#",
    },
    image: "/images/kat.png",
    featured: true,
  },
  {
    slug: "personal-dashboard",
    title: "Personal Dashboard / Tracker",
    summary:
      "Authenticated app to track habits and finances, featuring charts and daily streaks.",
    stack: ["Next.js", "Supabase", "Charts.js"],
    links: {
      live: "#",
      repo: "#",
    },
    image: "/images/dash-1.jpg",
    featured: true,
  },
  {
    slug: "portfolio-site",
    title: "Portfolio Website",
    summary:
      "This site: clean UI, modern tooling, and accessible components with shadcn/ui.",
    stack: ["Next.js", "Tailwind", "shadcn/ui"],
    links: {
      live: "https://michaelfjones.com",
      repo: "https://github.com/michaelfjones/michaeljones.dev",
    },
    image: "/images/mj.jpg",
    featured: true,
  },
];

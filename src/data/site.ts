// Single source of truth for page content. The HTML page and /llms.txt are both generated from this file.
// Rule: this is a personal page. No details about current or past jobs; LinkedIn covers the career.

export const person = {
  name: "Michael Müller",
  role: "Developer Productivity Engineer",
  tagline: "Developer productivity in the age of AI coding agents",
  summary:
    "I'm a software engineer and former engineering manager who loves building tools that make developers more productive. These days that mostly means AI coding agents, developer experience and automation.",
  location: "Palatinate, Germany",
  links: {
    linkedin: "https://www.linkedin.com/in/michael-m%C3%BCller-9a90a6284/",
    github: "https://github.com/haimich",
  },
};

export type Project = { name: string; description: string; tech: string[]; repo: string; demo?: string; image: string };

export const projects: Project[] = [
  { name: "Copy & Pasta", description: "My food blog, built with Vue.js and Nuxt.", tech: ["Vue.js", "Nuxt"], repo: "https://github.com/haimich/copyundpasta", demo: "https://copyundpasta.de", image: "/images/projects/copyundpasta.jpg" },
  { name: "Billy", description: "A simple invoice manager built with Electron and React.", tech: ["Electron", "React", "TypeScript"], repo: "https://github.com/haimich/billy", image: "/images/projects/billy.png" },
  { name: "sprachmuehle.de", description: "A static website built with HTML, CSS and a little PHP.", tech: ["HTML", "CSS", "PHP"], repo: "https://github.com/haimich/sprachmuehle.de", demo: "https://www.sprachmuehle.de/", image: "/images/projects/sprachmuehle.jpg" },
  { name: "Event", description: "A platform to discover and manage conferences and events, built on Node.js.", tech: ["Node.js"], repo: "https://github.com/haimich/event", image: "/images/projects/event.png" },
  { name: "Flatfinder", description: "A scraper that regularly checks websites for flats to buy.", tech: ["Node.js", "Scraping"], repo: "https://github.com/haimich/flatfinder", image: "/images/projects/flatfinder.png" },
  { name: "Knick-Knack", description: "A language-agnostic project scaffolding tool.", tech: ["JavaScript", "CLI"], repo: "https://github.com/knick-knack/knick-knack", image: "/images/projects/knick-knack.png" },
  { name: "Photobooth", description: "A photobooth app with a green-screen background of your choice.", tech: ["JavaScript", "Canvas"], repo: "https://github.com/haimich/photobooth", image: "/images/projects/photobooth.png" },
];

export type Talk = { title: string; venue: string; year?: number; slides?: string; video?: string };

export const talks: Talk[] = [
  { title: "Vue vs. Vanilla", venue: "Accento, Karlsruhe", year: 2019, slides: "https://haimich.github.io/vue-vs-vanilla", video: "https://www.youtube.com/watch?v=qVHh2go6GN4" },
  { title: "Innovation Week", venue: "Entwicklertag Karlsruhe", year: 2016, slides: "https://haimich.github.io/innovationweek" },
  { title: "How to become a Web Developer", venue: "HdM Stuttgart", year: 2016, slides: "http://slides.com/haimich/how-to-become-a-webdev" },
  { title: "Innovation Week", venue: "WebTech Con, Munich", year: 2015, slides: "https://haimich.github.io/innovationweek" },
  { title: "ReactJS · TypeScript · Electron", venue: "Guest lectures, HdM Stuttgart", slides: "http://slides.com/haimich/reactjs" },
];

export type CommunityItem = { title: string; text: string; url: string };

export const community: CommunityItem[] = [
  { title: "n8n community forum", text: "Helping other builders with workflows, nodes and agents.", url: "https://community.n8n.io/u/haimich" },
  { title: "Custom n8n node tutorial", text: "A step-by-step TypeScript tutorial for building a custom n8n node (NASA API).", url: "https://github.com/haimich/n8n-nasa" },
];

export const hobbies = ["Padel", "Bouldering", "3D printing", "Electronics projects"];

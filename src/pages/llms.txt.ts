import type { APIRoute } from "astro";
import { person, projects, talks, hobbies } from "../data/site";

// Generated from the same data as the HTML page, so the two cannot drift apart.
export const GET: APIRoute = () => {
  const lines = [
    `# ${person.name}`,
    "",
    `> ${person.role}. ${person.summary}`,
    "",
    "Career and current work: see LinkedIn (link below).",
    "",
    "## Side projects",
    ...projects.map((p) => `- [${p.name}](${p.repo}): ${p.description}`),
    "",
    "## Talks",
    ...talks.map((t) => `- ${t.title} (${t.venue}${t.year ? `, ${t.year}` : ""})`),
    "",
    "## Beyond work",
    hobbies.join(", "),
    "",
    "## Links",
    ...Object.entries(person.links).map(([k, v]) => `- ${k}: ${v}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

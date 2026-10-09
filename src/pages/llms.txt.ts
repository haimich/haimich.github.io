import type { APIRoute } from "astro";
import { person, focus, work, community, talks, career } from "../data/site";

// Generated from the same data as the HTML page, so the two cannot drift apart.
export const GET: APIRoute = () => {
  const lines = [
    `# ${person.name}`,
    "",
    `> ${person.role} at ${person.company}. ${person.tagline}. ${person.summary}`,
    "",
    "## Focus",
    ...focus.map((f) => `- ${f.title}: ${f.text}`),
    "",
    "## Selected work",
    ...work.flatMap((w) => [`### ${w.title}`, `Problem: ${w.problem}`, ...w.approach.map((a) => `- ${a}`), `Lesson: ${w.lesson}`, ""]),
    "## Career",
    ...career.map((c) => `- ${c.period}: ${c.title}, ${c.org}`),
    "",
    "## Community",
    ...community.map((c) => `- [${c.title}](${c.url}): ${c.text}`),
    "",
    "## Talks",
    ...talks.map((t) => `- ${t.title} (${t.venue}${t.year ? `, ${t.year}` : ""})`),
    "",
    "## Links",
    ...Object.entries(person.links).map(([k, v]) => `- ${k}: ${v}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

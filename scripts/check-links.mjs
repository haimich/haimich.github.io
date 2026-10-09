// Checks that every internal link and image in the built site points to a file that exists in dist/.
// External links are not fetched, so CI stays fast and deterministic.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const skip = join(dist, "cup"); // legacy static blog, copied as-is

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (path === skip) return [];
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith(".html") ? [path] : [];
  });
}

const broken = [];
for (const file of htmlFiles(dist)) {
  const html = readFileSync(file, "utf8");
  for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    const path = url.split(/[?#]/)[0];
    const target = join(dist, path);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, "index.html")));
    if (!ok) broken.push(`${file}: ${url}`);
  }
}

if (broken.length) {
  console.error(`Broken internal links:\n${broken.join("\n")}`);
  process.exit(1);
}
console.log("All internal links resolve.");

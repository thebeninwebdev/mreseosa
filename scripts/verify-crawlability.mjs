// Run with Node.js 22.18+ against `npm run build && npm start`.
// curl never executes JavaScript; strip scripts to exclude React payload matches.
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { projects } from "../data/projects.ts";
import { siteUrl, siteTitle, siteDescription } from "../data/site.ts";

const base = process.argv[2] || "http://localhost:3000";
const agents = [
  "curl-crawlability-audit",
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
];
const curl = (path, agent = agents[0]) => execFileSync(
  process.platform === "win32" ? "curl.exe" : "curl",
  ["--fail", "--silent", "--show-error", "--location", "--max-time", "30", "--user-agent", agent, `${base}${path}`],
  { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 },
);
const decode = (value) => value
  .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&amp;/g, "&");
const bodyHTML = (html) => html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)[1]
  .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
const text = (html) => decode(html.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
const includes = (haystack, needle) => assert.ok(haystack.includes(needle), `Missing: ${needle}`);
const meta = (html, name) => {
  const tag = (html.match(/<meta\b[^>]*>/g) || [])
    .find((tag) => tag.includes(`name="${name}"`) || tag.includes(`property="${name}"`));
  return tag ? decode(tag.match(/content="([^"]*)"/)[1]) : undefined;
};
const canonical = (html) => html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]*)"/)[1];

for (const agent of agents) {
  const html = curl("/", agent);
  const body = bodyHTML(html);
  const phrases = [
    "Eseosa Osayi", "Full-Stack Engineer", "Next.js Developer",
    "AI-powered products.", "Building production-grade software with Next.js,",
    "Engineering with purpose.", "Where I have built.", "SwiftDU",
    "Tools I work with.", "Next.js", "React", "TypeScript", "Node.js", "MongoDB",
    "Let's build something meaningful.", "Send me an email",
    ...projects.flatMap((project) => [project.title, project.summary]),
  ];
  phrases.forEach((phrase) => includes(text(body), phrase));
  includes(body, 'href="mailto:osayieseosa836@gmail.com"');
  includes(body, 'href="/resume.pdf"');
  assert.equal((body.match(/<h1\b/g) || []).length, 1);
  assert.equal(canonical(html), siteUrl);
  assert.equal(decode(html.match(/<title>(.*?)<\/title>/)[1]), siteTitle);
  assert.equal(meta(html, "description"), siteDescription);
  assert.equal(meta(html, "og:url"), siteUrl);
  includes(meta(html, "og:image"), `${siteUrl}/opengraph-image`);
  includes(meta(html, "twitter:image"), `${siteUrl}/opengraph-image`);
  assert.equal(meta(html, "robots"), "index, follow");
  const person = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(person["@type"], "Person");
  assert.equal(person.name, "Eseosa Osayi");
  assert.equal(person.url, siteUrl);
  person.sameAs.forEach((url) => includes(body, `href="${url}"`));
  console.log(`PASS homepage (${agent}): ${phrases.length} body phrases, links, one H1, metadata, Person JSON-LD`);

  for (const project of projects) {
    const path = `/projects/${project.slug}`;
    const page = curl(path, agent);
    const projectBody = bodyHTML(page);
    [project.title, project.summary, project.description, project.challenge,
      project.solution, ...project.technologies, ...project.contributions, ...project.results]
      .forEach((phrase) => includes(text(projectBody), phrase));
    assert.equal((projectBody.match(/<h1\b/g) || []).length, 1);
    assert.equal(canonical(page), `${siteUrl}${path}`);
    assert.equal(meta(page, "description"), project.summary);
    assert.equal(meta(page, "og:url"), `${siteUrl}${path}`);
    assert.equal(decode(page.match(/<title>(.*?)<\/title>/)[1]), `${project.title} | Eseosa Osayi`);
    assert.equal(meta(page, "twitter:image"), `${siteUrl}${project.coverImage}`);
    console.log(`PASS ${path}: all case-study content and unique metadata`);
  }
}

const robots = curl("/robots.txt");
includes(robots, "User-Agent: *");
includes(robots, "Allow: /");
includes(robots, `Sitemap: ${siteUrl}/sitemap.xml`);
assert.ok(!robots.includes("Disallow: /"));
const sitemap = curl("/sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(urls, [siteUrl, ...projects.map((project) => `${siteUrl}/projects/${project.slug}`)]);
console.log("PASS robots.txt and sitemap.xml: public crawling and exactly four real portfolio routes");

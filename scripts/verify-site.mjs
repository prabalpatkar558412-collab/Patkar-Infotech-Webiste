import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3100");
const canonicalOrigin = "https://www.patkarinfotech.com";
const failures = [];
const assets = new Set();
const links = [];
const pages = new Map();
const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');

async function get(path, options) {
  return fetch(new URL(path, base), { ...options, signal: AbortSignal.timeout(20000) });
}

const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.status, 200, "sitemap should be available");
const routes = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
assert(routes.includes("/tools"), "tools page should be included in the sitemap");

for (const path of routes) {
  const response = await get(path);
  const html = await response.text();
  if (response.status !== 200) failures.push(`${path}: HTTP ${response.status}`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) failures.push(`${path}: expected one main heading`);
  if (!html.includes('id="main-content"')) failures.push(`${path}: missing skip-link target`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (!canonical || new URL(canonical).href !== new URL(path, canonicalOrigin).href) failures.push(`${path}: incorrect canonical URL`);
  pages.set(path, html);
  for (const match of html.matchAll(/\bhref="([^"]+)"/g)) {
    const href = decode(match[1]);
    if (/^(mailto:|tel:|data:)/.test(href)) continue;
    const url = new URL(href, new URL(path, base));
    if (url.origin !== base.origin) continue;
    if (/\.[a-z\d]+$/i.test(url.pathname) || url.pathname.startsWith("/_next/")) assets.add(url.pathname + url.search);
    else links.push({ from: path, to: url.pathname, hash: url.hash });
  }
  for (const match of html.matchAll(/\bsrc="([^"]+)"/g)) {
    const url = new URL(decode(match[1]), base);
    if (url.origin === base.origin) assets.add(url.pathname + url.search);
  }
}

for (const link of links) {
  if (!pages.has(link.to)) {
    const response = await get(link.to);
    if (response.status !== 200) failures.push(`${link.from}: broken link to ${link.to}`);
    pages.set(link.to, await response.text());
  }
  if (link.hash) {
    const id = decodeURIComponent(link.hash.slice(1));
    const html = pages.get(link.to);
    if (!html.includes(`id="${id}"`)) failures.push(`${link.from}: missing anchor ${link.to}${link.hash}`);
  }
}

const assetQueue = [...assets];
await Promise.all(Array.from({ length: 5 }, async () => {
  while (assetQueue.length) {
    const asset = assetQueue.pop();
    const response = await get(asset, { method: "HEAD" });
    if (response.status !== 200) failures.push(`${asset}: HTTP ${response.status}`);
  }
}));

const missing = await get("/this-page-does-not-exist-review-check");
assert.equal(missing.status, 404, "unmatched URL should return 404");
assert((await missing.text()).includes("Go to Homepage"), "404 should offer a route home");
const robots = await get("/robots.txt");
assert((await robots.text()).includes(`${canonicalOrigin}/sitemap.xml`), "robots should reference the canonical sitemap");

// The public API prepares a draft; these checks never send a message or save a lead.
const valid = { name: "Website QA", company: "Local verification", email: "qa@example.com", phone: "+91 98765 43210", projectType: "Website", budget: "Under ₹25,000", description: "Please build a responsive website. नमस्ते!" };
const cases = [
  { name: "valid Unicode inquiry", value: valid, status: 200 },
  { name: "null payload", value: null, status: 400 },
  { name: "array payload", value: [], status: 400 },
  { name: "wrong field types", value: { ...valid, name: 123, phone: true }, status: 400 },
  { name: "invalid project type", value: { ...valid, projectType: "Unknown" }, status: 400 },
  { name: "missing required fields", value: {}, status: 400 },
  { name: "null body", value: null, status: 400 },
  { name: "array body", value: [], status: 400 },
  { name: "non-string fields", value: { ...valid, name: 123, phone: {} }, status: 400 },
  { name: "unknown project type", value: { ...valid, projectType: "unknown" }, status: 400 },
  { name: "invalid phone", value: { ...valid, phone: "call me 9876543210" }, status: 400 },
  { name: "oversize description", value: { ...valid, description: "x".repeat(2001) }, status: 400 },
  { name: "oversize request", value: { ...valid, description: "x".repeat(17000) }, status: 413 },
  { name: "malformed JSON", raw: "{invalid", status: 400 },
  { name: "non-JSON content", raw: "hello", contentType: "text/plain", status: 415 },
];
for (const test of cases) {
  const response = await get("/api/inquiry", { method: "POST", headers: { "Content-Type": test.contentType || "application/json" }, body: test.raw ?? JSON.stringify(test.value) });
  assert.equal(response.status, test.status, test.name);
  const result = await response.json();
  assert.equal(response.headers.get("cache-control"), "no-store", `${test.name}: private response caching`);
  if (test.status === 200) {
    assert.equal(result.delivered, false, "draft must never claim the inquiry was delivered");
    assert.equal(result.inquiryId, undefined, "draft must not invent a saved inquiry ID");
    const whatsapp = new URL(result.whatsappUrl);
    assert.equal(whatsapp.hostname, "wa.me");
    assert.equal(whatsapp.pathname, "/917723821518");
    assert(whatsapp.searchParams.get("text").includes(valid.description), "WhatsApp message should preserve Unicode and requirements");
    assert(result.emailUrl.startsWith("mailto:"), "email fallback should be available");
  } else assert.equal(result.success, false, test.name);
}

console.log(JSON.stringify({ base: base.origin, pages: routes.length, internalLinks: links.length, assets: assets.size, apiCases: cases.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;

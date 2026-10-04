const baseUrl = (
  process.env.SMOKE_BASE_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

const checks = [
  { path: "/", status: 200, contentType: "text/html" },
  { path: "/about", status: 200, contentType: "text/html" },
  { path: "/services", status: 200, contentType: "text/html" },
  { path: "/services/graphic-design", status: 200, contentType: "text/html" },
  { path: "/portfolio", status: 200, contentType: "text/html" },
  {
    path: "/portfolio/aurelia-brand-refresh",
    status: 200,
    contentType: "text/html",
  },
  { path: "/contact", status: 200, contentType: "text/html" },
  { path: "/robots.txt", status: 200, contentType: "text/plain" },
  { path: "/sitemap.xml", status: 200, contentType: "application/xml" },
  { path: "/opengraph-image", status: 200, contentType: "image/png" },
];

const failures = [];

console.log(`\nSmoke testing ${baseUrl}`);
console.log("----------------".padEnd(baseUrl.length + 14, "-"));

for (const check of checks) {
  const url = `${baseUrl}${check.path}`;

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type") || "";
    const statusMatches = response.status === check.status;
    const contentTypeMatches = contentType.includes(check.contentType);

    if (!statusMatches || !contentTypeMatches) {
      failures.push(
        `${check.path} expected ${check.status} ${check.contentType}, got ${response.status} ${contentType}`,
      );
      console.log(`FAIL ${check.path}`);
      continue;
    }

    console.log(`OK   ${check.path}`);
  } catch (error) {
    failures.push(`${check.path} ${error.message}`);
    console.log(`FAIL ${check.path}`);
  }
}

if (failures.length) {
  console.log("\nSmoke test failures:");
  for (const failure of failures) {
    console.log(`- ${failure}`);
  }
  process.exit(1);
}

console.log("\nSmoke test passed.");

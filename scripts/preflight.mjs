import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredEnv = [
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "NEXT_PUBLIC_SANITY_API_VERSION",
  "NEXT_PUBLIC_SITE_URL",
];
const requiredFiles = [
  "public/images/cre8iq-logo.png",
  "src/app/studio/[[...tool]]/page.tsx",
  "src/app/sitemap.ts",
  "src/app/robots.ts",
  "src/app/opengraph-image.tsx",
];
const env = {
  ...parseEnvFile(".env"),
  ...parseEnvFile(".env.local"),
  ...process.env,
};
const issues = [];
const warnings = [];

for (const key of requiredEnv) {
  if (!env[key]) {
    issues.push(`Missing ${key}`);
  }
}

if (env.NEXT_PUBLIC_SITE_URL?.includes("localhost")) {
  warnings.push(
    "NEXT_PUBLIC_SITE_URL still points to localhost. Set the production domain in Vercel before launch.",
  );
}

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    issues.push(`Missing required file: ${file}`);
  }
}

if (existsSync(join(root, "public/resume/cre8iq-resume-placeholder.txt"))) {
  warnings.push("Resume/CV is still the placeholder text file.");
}

const gitignore = readFileIfExists(".gitignore");
if (!gitignore.includes(".env*")) {
  warnings.push(".gitignore does not appear to ignore env files.");
}

const siteConfig = readFileIfExists("src/lib/site.ts");
if (!siteConfig.includes("cre8iq@gmail.com")) {
  warnings.push("Expected Cre8iq email was not found in site config.");
}
if (!siteConfig.includes("https://wa.me/2349064750948")) {
  warnings.push("Expected WhatsApp link was not found in site config.");
}

printResult("Deployment Preflight", issues, warnings);

if (issues.length) {
  process.exit(1);
}

function parseEnvFile(file) {
  const source = readFileIfExists(file);
  const parsed = {};

  for (const line of source.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [key, ...valueParts] = trimmed.split("=");
    const value = valueParts.join("=").trim().replace(/^['"]|['"]$/g, "");
    parsed[key.trim()] = value;
  }

  return parsed;
}

function readFileIfExists(file) {
  const path = join(root, file);

  return existsSync(path) ? readFileSync(path, "utf8") : "";
}

function printResult(title, currentIssues, currentWarnings) {
  console.log(`\n${title}`);
  console.log("-".repeat(title.length));

  if (!currentIssues.length && !currentWarnings.length) {
    console.log("Ready: no issues or warnings found.");
    return;
  }

  for (const issue of currentIssues) {
    console.log(`Issue: ${issue}`);
  }

  for (const warning of currentWarnings) {
    console.log(`Warning: ${warning}`);
  }
}

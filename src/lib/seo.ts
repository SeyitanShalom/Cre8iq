import { siteConfig } from "@/lib/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const defaultSeo = {
  title: "Cre8iq | Graphic Design, UI/UX & Web Development",
  description:
    "Cre8iq is a premium personal creative portfolio for brand visuals, product experiences, and refined websites.",
  image: "/opengraph-image",
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    email: siteConfig.email,
    url: siteUrl,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    jobTitle: "Graphic designer, UI/UX product designer, and web developer",
    knowsAbout: [
      "Graphic Design",
      "UI/UX Product Design",
      "Web Development",
      "Brand Direction",
      "Frontend Development",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: defaultSeo.description,
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

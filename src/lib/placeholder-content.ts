export type HomepageStat = {
  value: string;
  label: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  avatarAlt?: string;
  featured?: boolean;
};

export const homepageStats: HomepageStat[] = [
  { value: "03", label: "Core creative disciplines" },
  { value: "06", label: "Projects shaping the first portfolio archive" },
  { value: "01", label: "Personal brand with a focused premium direction" },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Understand",
    description:
      "I start by getting clear on the audience, goal, offer, and visual expectation before touching the design.",
  },
  {
    title: "Shape",
    description:
      "I turn the direction into structure, mood, layouts, flows, and practical creative decisions.",
  },
  {
    title: "Refine",
    description:
      "I polish the work until the final direction feels clear, useful, and visually confident.",
  },
  {
    title: "Deliver",
    description:
      "I prepare the final files, screens, or build so the work is usable beyond the presentation.",
  },
];

export const tools = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Sanity CMS",
  "GSAP",
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Cre8iq brought structure and taste to the visual direction. The final work felt premium without feeling distant.",
    name: "Maya Okafor",
    role: "Founder, Aurelia Studio",
  },
  {
    quote:
      "The interface direction was calm, sharp, and easy to follow. It made the product feel much more trustworthy.",
    name: "Daniel Ibe",
    role: "Product Lead, FluxPay",
  },
  {
    quote:
      "The website concept felt clean and intentional from the first screen. It gave the brand a stronger digital presence.",
    name: "Tomi Adewale",
    role: "Creative Director, Northline",
  },
];

export type ProjectFormat = "Case study" | "Simple project";

export type ProjectVisualType =
  | "brand-system"
  | "dashboard"
  | "website"
  | "social-kit"
  | "mobile-app"
  | "landing-page";

export type ProjectGalleryItem = {
  title: string;
  label: string;
  description: string;
  visual: ProjectVisualType;
  imageUrl?: string;
  imageAlt?: string;
};

export type CaseStudySection = {
  title: string;
  description: string;
  points: string[];
};

export type PortfolioProject = {
  title: string;
  slug: string;
  category: string;
  format: ProjectFormat;
  year: string;
  client: string;
  role: string;
  accent: string;
  visual: ProjectVisualType;
  featured?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  summary: string;
  overview: string;
  challenge: string;
  direction: string;
  outcome: string;
  services: string[];
  tools: string[];
  highlights: string[];
  goals: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  gallery: ProjectGalleryItem[];
  caseStudy?: {
    process: string[];
    solution: string;
    results: string[];
    sections: CaseStudySection[];
  };
  simpleProject?: {
    scope: string;
    deliverables: string[];
    handoff: string[];
  };
  seoTitle?: string;
  seoDescription?: string;
};

export const sampleProjects: PortfolioProject[] = [
  {
    title: "Aurelia Brand Refresh",
    slug: "aurelia-brand-refresh",
    category: "Graphic Design",
    format: "Case study",
    year: "2026",
    client: "Aurelia Studio",
    role: "Brand identity and visual system",
    accent: "#00acb5",
    visual: "brand-system",
    summary:
      "A premium identity refresh for a beauty brand built around cleaner visual rules and stronger shelf presence.",
    overview:
      "Aurelia needed a brand expression that could move across packaging, social content, and campaign moments without feeling scattered.",
    challenge:
      "The brand needed to feel more refined without losing the soft, approachable quality its audience already trusted.",
    direction:
      "The visual system leaned into cleaner spacing, a calmer typographic rhythm, and a tighter set of signature teal-led accents.",
    outcome:
      "A tighter identity direction, clearer campaign visuals, and a more consistent social presentation.",
    services: ["Graphic Design", "Brand Direction", "Campaign Assets"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    highlights: [
      "Refined wordmark direction",
      "Social launch templates",
      "Color and typography usage rules",
    ],
    goals: [
      "Make the identity feel more premium and recognizable",
      "Create a practical visual system for campaign work",
      "Keep the refreshed brand soft enough for an existing audience",
    ],
    metrics: [
      { value: "18", label: "Launch assets shaped" },
      { value: "04", label: "Core identity rules" },
      { value: "03", label: "Campaign templates" },
    ],
    gallery: [
      {
        title: "Identity System",
        label: "01 / Brand rules",
        description:
          "A compact system for logo spacing, signature color use, type pairing, and recurring campaign composition.",
        visual: "brand-system",
      },
      {
        title: "Launch Templates",
        label: "02 / Social direction",
        description:
          "Reusable social layouts designed to keep beauty content editorial, light, and immediately recognizable.",
        visual: "social-kit",
      },
      {
        title: "Campaign Page",
        label: "03 / Digital touchpoint",
        description:
          "A refined web section concept for product storytelling and campaign conversion moments.",
        visual: "landing-page",
      },
    ],
    caseStudy: {
      process: [
        "Audited existing assets and identified where the visual system felt inconsistent.",
        "Explored refined type, spacing, and campaign composition directions.",
        "Built reusable launch templates around the selected brand mood.",
        "Prepared usage notes so future content could stay aligned.",
      ],
      solution:
        "The refresh centered on a tighter wordmark environment, restrained color pairings, clean campaign layouts, and a social kit that could scale beyond one launch.",
      results: [
        "The brand presentation became more consistent across everyday content.",
        "Campaign graphics had clearer hierarchy and stronger product focus.",
        "The refreshed direction stayed personal and warm while feeling more premium.",
      ],
      sections: [
        {
          title: "Visual System",
          description:
            "The identity rules were kept intentionally compact so they would be easy to apply in real production.",
          points: [
            "Defined consistent logo spacing and placement rules",
            "Balanced soft neutrals with the Cre8iq teal-led accent approach",
            "Created repeatable campaign layouts for product stories",
          ],
        },
        {
          title: "Content Rhythm",
          description:
            "The social direction gives the brand room to alternate between education, launch, and proof content.",
          points: [
            "Built content types for announcements, features, and testimonials",
            "Used simple type hierarchy to keep posts readable at small sizes",
            "Created a layout pattern that can be extended later in the CMS",
          ],
        },
      ],
    },
  },
  {
    title: "FluxPay Product Dashboard",
    slug: "fluxpay-product-dashboard",
    category: "UI/UX Product Design",
    format: "Case study",
    year: "2026",
    client: "FluxPay",
    role: "Dashboard UX and UI design",
    accent: "#00575c",
    visual: "dashboard",
    summary:
      "A finance dashboard concept focused on calmer data scanning, clearer actions, and trust-building interface patterns.",
    overview:
      "FluxPay needed a dashboard direction that made financial data easier to scan while still making important actions feel close at hand.",
    challenge:
      "Financial actions felt too busy and unclear, making the dashboard harder to scan during daily use.",
    direction:
      "The interface was shaped around fewer priority zones, clearer status language, and reusable product patterns for repeated finance tasks.",
    outcome:
      "A cleaner information hierarchy, stronger action placement, and a more confident product experience.",
    services: ["UI/UX Product Design", "Design System", "Prototype"],
    tools: ["Figma", "FigJam", "Notion"],
    highlights: [
      "Dashboard information architecture",
      "Reusable product components",
      "Interactive prototype flow",
    ],
    goals: [
      "Reduce dashboard scanning friction",
      "Make primary actions easier to find",
      "Create reusable components for future product areas",
    ],
    metrics: [
      { value: "09", label: "Core screens" },
      { value: "24", label: "Reusable UI parts" },
      { value: "03", label: "Primary task flows" },
    ],
    gallery: [
      {
        title: "Overview Dashboard",
        label: "01 / Daily scan",
        description:
          "A calmer financial overview that prioritizes balance, activity, alerts, and the next useful action.",
        visual: "dashboard",
      },
      {
        title: "Mobile Transfer Flow",
        label: "02 / Task path",
        description:
          "A tighter transfer flow designed to make review states and confirmation moments feel trustworthy.",
        visual: "mobile-app",
      },
      {
        title: "Component Library",
        label: "03 / Product system",
        description:
          "Reusable interface pieces for cards, tables, controls, empty states, and financial status indicators.",
        visual: "website",
      },
    ],
    caseStudy: {
      process: [
        "Mapped the highest-frequency finance tasks and the information needed to complete them.",
        "Restructured dashboard zones around daily scanning and urgent action.",
        "Designed high-fidelity screens and reusable interface components.",
        "Connected the screens into a prototype to test task movement and clarity.",
      ],
      solution:
        "The dashboard became a quieter workspace with clear data blocks, restrained motion cues, direct action placement, and a system of components that could extend into future product areas.",
      results: [
        "Daily account status became easier to understand at a glance.",
        "Key finance actions gained stronger placement and clearer review states.",
        "The interface gained a repeatable component language for product expansion.",
      ],
      sections: [
        {
          title: "Information Hierarchy",
          description:
            "The first screen was reorganized around the questions users ask most often when they open a finance product.",
          points: [
            "Moved balance, status, and recent activity into predictable zones",
            "Reduced competing actions in the first viewport",
            "Used label hierarchy to separate insight from transaction detail",
          ],
        },
        {
          title: "Trust Cues",
          description:
            "Financial interfaces need to feel calm during review and confirmation moments.",
          points: [
            "Designed explicit review states before final actions",
            "Used status chips for pending, complete, and flagged activity",
            "Kept destructive actions visually separate from common tasks",
          ],
        },
      ],
    },
  },
  {
    title: "Northline Studio Website",
    slug: "northline-studio-website",
    category: "Web Development",
    format: "Simple project",
    year: "2026",
    client: "Northline Studio",
    role: "Frontend design and development",
    accent: "#e3feff",
    visual: "website",
    summary:
      "A refined portfolio website concept for a creative studio, built with responsive layouts and elegant content flow.",
    overview:
      "Northline needed a compact website structure that made their work easier to browse and their services easier to understand.",
    challenge:
      "The studio needed a web presence that made their work easier to browse and their offer easier to understand.",
    direction:
      "The site direction focused on editorial project browsing, direct service language, and an uncomplicated contact path.",
    outcome:
      "A polished responsive site structure with stronger project presentation and clearer contact paths.",
    services: ["Web Development", "UI Design", "Responsive Build"],
    tools: ["Next.js", "React", "Tailwind CSS"],
    highlights: [
      "Responsive page system",
      "Premium work archive layout",
      "Fast-loading frontend foundation",
    ],
    goals: [
      "Create a sharper first impression",
      "Make selected work easier to scan",
      "Keep the build ready for future CMS content",
    ],
    metrics: [
      { value: "05", label: "Responsive page views" },
      { value: "03", label: "Conversion paths" },
      { value: "01", label: "CMS-ready structure" },
    ],
    gallery: [
      {
        title: "Homepage System",
        label: "01 / First screen",
        description:
          "A compact homepage direction built around a clear proposition, selected work, and quick contact movement.",
        visual: "website",
      },
      {
        title: "Project Archive",
        label: "02 / Work browsing",
        description:
          "A work listing pattern designed to make project type, client, and creative focus easy to compare.",
        visual: "landing-page",
      },
      {
        title: "Responsive States",
        label: "03 / Build quality",
        description:
          "Mobile and desktop layouts kept the same editorial tone while adapting spacing and content density.",
        visual: "mobile-app",
      },
    ],
    simpleProject: {
      scope:
        "A focused web design and frontend build for a studio portfolio with reusable sections and clear project-routing patterns.",
      deliverables: [
        "Responsive homepage and project archive",
        "Reusable page sections",
        "Contact CTA system",
        "CMS-ready content structure notes",
      ],
      handoff: [
        "Reusable component structure",
        "Responsive layout checks",
        "Build-ready frontend files",
      ],
    },
  },
  {
    title: "Luma Social Kit",
    slug: "luma-social-kit",
    category: "Graphic Design",
    format: "Simple project",
    year: "2026",
    client: "Luma Organics",
    role: "Social media design system",
    accent: "#00acb5",
    visual: "social-kit",
    summary:
      "A flexible content kit for a wellness brand that needed social posts to feel more consistent and editorial.",
    overview:
      "Luma needed a reusable content kit that could turn wellness education, launch notes, and product proof into a recognizable feed system.",
    challenge:
      "The brand had strong content but inconsistent visuals across launches, education posts, and product highlights.",
    direction:
      "The kit used a restrained layout system, repeatable text zones, and a soft product-led visual rhythm.",
    outcome:
      "A reusable system of post styles that made the content easier to produce and easier to recognize.",
    services: ["Graphic Design", "Social Media Design"],
    tools: ["Adobe Photoshop", "Figma"],
    highlights: [
      "Content template set",
      "Launch post direction",
      "Reusable visual rules",
    ],
    goals: [
      "Make recurring content easier to produce",
      "Improve recognition across the feed",
      "Keep the visual language calm and editorial",
    ],
    metrics: [
      { value: "12", label: "Post templates" },
      { value: "04", label: "Content types" },
      { value: "02", label: "Launch sets" },
    ],
    gallery: [
      {
        title: "Feed Grid",
        label: "01 / Content rhythm",
        description:
          "A nine-post rhythm balancing product moments, education, proof, and soft campaign announcements.",
        visual: "social-kit",
      },
      {
        title: "Template Set",
        label: "02 / Production kit",
        description:
          "Editable layouts for quotes, ingredient education, product features, and launch countdowns.",
        visual: "brand-system",
      },
      {
        title: "Story Frames",
        label: "03 / Mobile content",
        description:
          "Simple vertical layouts for quick announcements and product education.",
        visual: "mobile-app",
      },
    ],
    simpleProject: {
      scope:
        "A social-first design system for recurring wellness content, launch storytelling, and product education.",
      deliverables: [
        "Static feed templates",
        "Story frame layouts",
        "Content usage notes",
        "Launch announcement direction",
      ],
      handoff: [
        "Editable Figma templates",
        "Export-ready post sizes",
        "Simple usage guide for repeat posts",
      ],
    },
  },
  {
    title: "NovaLearn Mobile App",
    slug: "novalearn-mobile-app",
    category: "UI/UX Product Design",
    format: "Case study",
    year: "2026",
    client: "NovaLearn",
    role: "Mobile app UX and UI",
    accent: "#00575c",
    visual: "mobile-app",
    summary:
      "A mobile learning app concept designed around simple lesson discovery and cleaner progress tracking.",
    overview:
      "NovaLearn needed a mobile learning flow that helped users find lessons quickly and understand progress without feeling overloaded.",
    challenge:
      "Learners needed a calmer way to find courses, continue lessons, and understand their weekly progress.",
    direction:
      "The app direction emphasized progressive disclosure, clear lesson grouping, and small visual cues for progress and continuity.",
    outcome:
      "A focused mobile flow with clearer learning paths, progress cues, and stronger visual hierarchy.",
    services: ["UI/UX Product Design", "Mobile App Design"],
    tools: ["Figma", "FigJam"],
    highlights: [
      "Mobile user flow",
      "Lesson discovery screens",
      "Progress tracking interface",
    ],
    goals: [
      "Make continuing a lesson feel immediate",
      "Clarify progress without adding pressure",
      "Create a friendly but polished mobile interface",
    ],
    metrics: [
      { value: "11", label: "Mobile screens" },
      { value: "04", label: "Learning states" },
      { value: "02", label: "Core flows" },
    ],
    gallery: [
      {
        title: "Course Discovery",
        label: "01 / Find lessons",
        description:
          "A mobile browsing flow with clearer lesson groups, featured paths, and continued-learning shortcuts.",
        visual: "mobile-app",
      },
      {
        title: "Progress Dashboard",
        label: "02 / Track growth",
        description:
          "A compact dashboard that makes streaks, weekly progress, and next lessons easy to understand.",
        visual: "dashboard",
      },
      {
        title: "Lesson Detail",
        label: "03 / Focus state",
        description:
          "A quieter lesson page with simple metadata, clear start actions, and a useful completion state.",
        visual: "website",
      },
    ],
    caseStudy: {
      process: [
        "Mapped the learner journey from discovery to continuation.",
        "Simplified course groupings and reduced duplicated navigation choices.",
        "Designed mobile-first screens for browsing, progress, and lesson detail.",
        "Refined visual hierarchy around the next meaningful action.",
      ],
      solution:
        "The app concept uses clear learning paths, compact progress indicators, and calm lesson pages so users can understand where they are and what to do next.",
      results: [
        "Lesson discovery became more direct and less crowded.",
        "Progress information became easier to understand without heavy dashboards.",
        "The mobile UI gained a more focused and premium learning feel.",
      ],
      sections: [
        {
          title: "Discovery Flow",
          description:
            "The browsing experience was organized around intent instead of content volume.",
          points: [
            "Grouped lessons by learner goal and continuation state",
            "Made the next lesson available from the first screen",
            "Kept metadata short so cards stayed easy to compare",
          ],
        },
        {
          title: "Progress Language",
          description:
            "Progress cues needed to encourage users without turning the interface into a stats-heavy product.",
          points: [
            "Used weekly progress cards for light accountability",
            "Balanced streaks with completion and saved paths",
            "Kept visual feedback calm and easy to scan",
          ],
        },
      ],
    },
  },
  {
    title: "Mosaic Agency Landing Page",
    slug: "mosaic-agency-landing-page",
    category: "Web Development",
    format: "Simple project",
    year: "2026",
    client: "Mosaic Agency",
    role: "Landing page design and frontend build",
    accent: "#00acb5",
    visual: "landing-page",
    summary:
      "A polished landing page concept for a small agency that needed a sharper first impression and stronger lead flow.",
    overview:
      "Mosaic needed a single-page experience that explained the offer quickly and moved qualified visitors toward contact.",
    challenge:
      "The original page lacked a clear message, strong service structure, and a focused contact path.",
    direction:
      "The page was structured around a stronger first screen, concise service proof, and repeated contact opportunities.",
    outcome:
      "A cleaner one-page experience with stronger positioning, service blocks, and direct conversion points.",
    services: ["Web Development", "Landing Page Design"],
    tools: ["Next.js", "Tailwind CSS", "React"],
    highlights: [
      "High-converting page structure",
      "Responsive frontend build",
      "Contact-focused CTA flow",
    ],
    goals: [
      "Clarify the agency offer in the first viewport",
      "Give service sections a stronger order",
      "Make contact feel natural throughout the page",
    ],
    metrics: [
      { value: "01", label: "Focused page" },
      { value: "05", label: "Content sections" },
      { value: "04", label: "CTA moments" },
    ],
    gallery: [
      {
        title: "Hero Structure",
        label: "01 / First impression",
        description:
          "A direct first screen with a clearer promise, supporting service cues, and a visible conversion route.",
        visual: "landing-page",
      },
      {
        title: "Service Blocks",
        label: "02 / Offer clarity",
        description:
          "Concise service sections designed for scanning and quick fit decisions.",
        visual: "website",
      },
      {
        title: "Mobile Landing",
        label: "03 / Responsive path",
        description:
          "A stacked mobile layout that keeps the CTA close without overwhelming the page.",
        visual: "mobile-app",
      },
    ],
    simpleProject: {
      scope:
        "A focused landing page design and frontend build for a small agency repositioning its offer online.",
      deliverables: [
        "Responsive landing page",
        "Service section structure",
        "CTA and contact flow",
        "Frontend build components",
      ],
      handoff: [
        "Production-ready page structure",
        "Reusable section components",
        "Responsive QA notes",
      ],
    },
  },
];

export const projectCategories = Array.from(
  new Set(sampleProjects.map((project) => project.category)),
);

export const projectServices = Array.from(
  new Set(sampleProjects.flatMap((project) => project.services)),
).sort();

export function getProjectCategories(projects: PortfolioProject[]) {
  return Array.from(new Set(projects.map((project) => project.category)));
}

export function getProjectServices(projects: PortfolioProject[]) {
  return Array.from(
    new Set(projects.flatMap((project) => project.services)),
  ).sort();
}

export function getProjectBySlug(slug: string) {
  return sampleProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: PortfolioProject, count = 2) {
  return sampleProjects
    .filter((item) => item.slug !== project.slug)
    .sort((first, second) => {
      const firstScore =
        Number(first.category === project.category) +
        first.services.filter((service) => project.services.includes(service))
          .length;
      const secondScore =
        Number(second.category === project.category) +
        second.services.filter((service) => project.services.includes(service))
          .length;

      return secondScore - firstScore;
    })
    .slice(0, count);
}

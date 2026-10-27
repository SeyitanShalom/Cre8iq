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

export type SiteService = {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  description: string;
  deliverables: string[];
  process: string[];
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
  "Local content files",
  "GSAP",
];

export const services: SiteService[] = [
  {
    title: "Graphic Design",
    slug: "graphic-design",
    eyebrow: "Visual identity and brand assets",
    summary:
      "Brand visuals, campaign assets, and polished creative systems for digital-first brands.",
    description:
      "I shape visual identities and everyday brand assets that help a business look intentional across social, digital, and presentation touchpoints.",
    deliverables: [
      "Logo direction and usage rules",
      "Social media graphics",
      "Pitch and presentation design",
      "Campaign and launch visuals",
    ],
    process: [
      "Clarify the brand mood and audience",
      "Create visual directions",
      "Refine the chosen system",
      "Prepare usable final assets",
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-product-design",
    eyebrow: "Interfaces and product journeys",
    summary:
      "Clear journeys, refined interfaces, and product thinking for useful digital experiences.",
    description:
      "I design product screens and user flows that make digital experiences easier to understand, easier to trust, and easier to move through.",
    deliverables: [
      "User flows and wireframes",
      "High-fidelity interface designs",
      "Interactive prototypes",
      "Design systems and UI components",
    ],
    process: [
      "Map user goals and content needs",
      "Sketch the flow and structure",
      "Design polished screens",
      "Prototype and refine interactions",
    ],
  },
  {
    title: "Web Development",
    slug: "web-development",
    eyebrow: "Premium responsive websites",
    summary:
      "Responsive websites built with care, performance, and a premium visual finish.",
    description:
      "I build websites that carry the design direction into a fast, responsive, and maintainable experience for real visitors.",
    deliverables: [
      "Responsive website builds",
      "Portfolio and landing pages",
      "Frontend implementation",
      "Local content structures",
    ],
    process: [
      "Plan the site structure",
      "Build reusable sections",
      "Connect content and interactions",
      "Test, polish, and prepare for launch",
    ],
  },
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
  | "landing-page"
  | "web-application";

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
  websiteUrl?: string;
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
    title: "AI-Powered Interview Platform",
    slug: "ai-interview-platform",
    category: "Web Development",
    format: "Case study",
    year: "2026",
    client: "Academic Project",
    role: "Product Design and Full-Stack Development",
    accent: "#00acb5",
    visual: "web-application",
    summary:
      "An AI-powered interview platform that helps candidates practice interviews and enables companies to conduct and assess interviews.",
    overview:
      "The platform is designed to support interview preparation for job seekers while giving companies a structured way to interview candidates and evaluate their responses.",
    challenge:
      "Candidates need accessible interview practice, while companies need a more organized way to conduct interviews and assess applicants.",
    direction:
      "The platform combines an accessible interface with AI-assisted interview workflows, authentication, and structured candidate assessment.",
    outcome:
      "A full-stack product concept focused on interview practice, candidate evaluation, and a streamlined interview experience.",
    services: ["UI/UX Design", "Web Development", "AI Integration"],
    tools: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    highlights: [
      "Candidate interview practice",
      "Company interview workflows",
      "AI-assisted assessment",
    ],
    goals: [
      "Make interview practice more accessible",
      "Help companies organize candidate interviews",
      "Create a clear and intuitive assessment experience",
    ],
    metrics: [],
    gallery: [
      {
        title: "Interview Experience",
        label: "01 / Candidate flow",
        description:
          "The interface for navigating interview preparation and interview sessions.",
        visual: "web-application",
      },
      {
        title: "Platform Dashboard",
        label: "02 / User workspace",
        description:
          "A structured workspace for accessing interviews and related activities.",
        visual: "dashboard",
      },
      {
        title: "Product Interface",
        label: "03 / UI system",
        description:
          "Reusable interface patterns and layouts for the platform.",
        visual: "website",
      },
    ],
    caseStudy: {
      process: [
        "Defined the platform's candidate and company use cases.",
        "Planned the application structure and user flows.",
        "Developed the frontend and database integration.",
        "Worked on the AI interview experience and supporting workflows.",
      ],
      solution:
        "A web-based interview platform designed to bring interview practice and company-led candidate assessment into one application.",
      results: [
        "Established a product direction for candidates and companies.",
        "Structured the application around interview-related workflows.",
        "Created a foundation for AI-assisted interview experiences.",
      ],
      sections: [
        {
          title: "Candidate Experience",
          description:
            "The candidate side focuses on interview preparation and navigating interview sessions.",
          points: [
            "Interview practice workflows",
            "Clear navigation between application features",
            "An interface designed around interview preparation",
          ],
        },
        {
          title: "Technical Architecture",
          description:
            "The application uses a modern web stack with a relational database backend.",
          points: [
            "Next.js application architecture",
            "Supabase and PostgreSQL integration",
            "AI interview functionality",
          ],
        },
      ],
    },
  },
  {
    title: "Johnvents Apex League",
    slug: "johnvents-apex-league",
    category: "Web Development",
    format: "Case study",
    year: "2026",
    client: "Johnvents Apex League",
    role: "Product Design and Web Development",
    accent: "#00acb5",
    visual: "web-application",
    summary:
      "A football competition platform designed to support match information, team records, fixtures, results, and league standings.",
    overview:
      "The platform supports the digital presentation and management of a school football competition, making competition information easier for teams, organizers, and supporters to access.",
    challenge:
      "Managing teams, fixtures, results, and competition records becomes more demanding as a tournament expands across locations and stages.",
    direction:
      "The platform brings competition information into one place, with public-facing pages and administrative tools for managing football data.",
    outcome:
      "A digital platform direction for presenting fixtures, match results, team information, and competition standings.",
    services: [
      "UI/UX Design",
      "Web Development",
      "Sports Platform Development",
    ],
    tools: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Team and player management",
      "Fixtures and match results",
      "League standings and match details",
    ],
    goals: [
      "Make competition information accessible",
      "Simplify match administration",
      "Maintain organized team and competition records",
    ],
    metrics: [],
    gallery: [
      {
        title: "Competition Homepage",
        label: "01 / Overview",
        description:
          "A central entry point for competition news, fixtures, results, and updates.",
        visual: "website",
      },
      {
        title: "Match Centre",
        label: "02 / Match information",
        description:
          "A match-focused interface for presenting scores, match events, and team information.",
        visual: "dashboard",
      },
      {
        title: "Competition Management",
        label: "03 / Administration",
        description:
          "An administrative interface for organizing competition data and match updates.",
        visual: "web-application",
      },
    ],
    caseStudy: {
      process: [
        "Mapped the competition's information and management requirements.",
        "Planned the public pages and administrative workflows.",
        "Structured the data around teams, players, fixtures, and matches.",
        "Developed the platform architecture and match-management features.",
      ],
      solution:
        "A football management platform that connects public competition pages with structured match and team administration.",
      results: [
        "Defined a central structure for competition information.",
        "Organized key football entities and match records.",
        "Established a foundation for presenting results and standings.",
      ],
      sections: [
        {
          title: "Match Management",
          description:
            "The match centre is designed around the information needed to follow a football match.",
          points: [
            "Fixtures and match scheduling",
            "Scores and match events",
            "Team lineups and match details",
          ],
        },
        {
          title: "Competition Data",
          description:
            "Structured competition records support the presentation of teams and standings.",
          points: [
            "Team and player records",
            "Match results",
            "League table information",
          ],
        },
      ],
    },
  },
  {
    title: "Attendance OCR System",
    slug: "attendance-ocr-system",
    category: "Web Development",
    format: "Case study",
    year: "2026",
    client: "Independent Project",
    role: "System Design and Full-Stack Development",
    accent: "#00575c",
    visual: "web-application",
    summary:
      "An attendance digitization system concept that extracts information from photographed or scanned attendance records.",
    overview:
      "The system explores how attendance information can be captured from different document layouts and converted into structured digital records.",
    challenge:
      "Attendance sheets differ in their layouts and fields, making it difficult to extract and store information using one fixed format.",
    direction:
      "The proposed workflow combines OCR-based text extraction with flexible field recognition and structured data storage.",
    outcome:
      "A system concept for reducing manual attendance data entry and supporting varied attendance record formats.",
    services: [
      "System Design",
      "Web Development",
      "OCR Integration",
      "Database Design",
    ],
    tools: ["Python", "OCR Technology", "React", "Database Technologies"],
    highlights: [
      "Image-based text extraction",
      "Flexible attendance fields",
      "Structured digital records",
    ],
    goals: [
      "Reduce manual data entry",
      "Support different attendance sheet formats",
      "Organize extracted information for later retrieval",
    ],
    metrics: [],
    gallery: [
      {
        title: "Document Capture",
        label: "01 / Input",
        description:
          "A workflow for submitting photographed or scanned attendance sheets.",
        visual: "web-application",
      },
      {
        title: "Extracted Information",
        label: "02 / Data extraction",
        description:
          "A review interface for checking information extracted from attendance records.",
        visual: "dashboard",
      },
      {
        title: "Digital Records",
        label: "03 / Data management",
        description:
          "A structured view of attendance data after extraction and review.",
        visual: "website",
      },
    ],
    caseStudy: {
      process: [
        "Identified common attendance sheet layouts and field variations.",
        "Considered OCR workflows for extracting text from document images.",
        "Designed a flexible approach to handling different extracted fields.",
        "Planned how extracted information could be reviewed and stored.",
      ],
      solution:
        "An attendance digitization workflow that treats document images as inputs and structured attendance records as outputs.",
      results: [
        "Defined a flexible approach to attendance data extraction.",
        "Identified the need for review and correction of OCR results.",
        "Outlined a data model for varying attendance fields.",
      ],
      sections: [
        {
          title: "Document Processing",
          description:
            "The input workflow accommodates attendance records with different layouts.",
          points: [
            "Photograph or scan attendance documents",
            "Extract text using OCR",
            "Review extracted fields for accuracy",
          ],
        },
        {
          title: "Flexible Data Storage",
          description:
            "The system is intended to handle different fields depending on the attendance document.",
          points: [
            "Support different attendance attributes",
            "Organize extracted records",
            "Enable retrieval of saved information",
          ],
        },
      ],
    },
  },
  {
    title: "Glowera Skincare App",
    slug: "glowera-skincare-app",
    category: "UI/UX Design",
    format: "Case study",
    year: "2025",
    client: "SIWES Project",
    role: "UI/UX Designer",
    accent: "#00acb5",
    visual: "mobile-app",
    summary:
      "A skincare app concept focused on presenting skincare products and information through a clear mobile experience.",
    overview:
      "Glowera was one of the product design projects explored during your SIWES placement, providing an opportunity to apply user interface and experience design principles.",
    challenge:
      "Skincare products and related information need to be presented in a way that feels approachable and easy to navigate on mobile devices.",
    direction:
      "The design work focused on mobile interface structure, visual hierarchy, and a consistent product experience.",
    outcome:
      "A skincare product design project demonstrating mobile UI/UX design and interface organization.",
    services: ["UI/UX Design", "Mobile App Design", "Prototyping"],
    tools: ["Figma", "FigJam"],
    highlights: [
      "Mobile interface design",
      "Visual hierarchy",
      "User flow exploration",
    ],
    goals: [
      "Create a clear mobile browsing experience",
      "Organize skincare information effectively",
      "Apply consistent interface design principles",
    ],
    metrics: [],
    gallery: [
      {
        title: "App Interface",
        label: "01 / Mobile UI",
        description: "Selected mobile screens from the skincare app design.",
        visual: "mobile-app",
      },
      {
        title: "Interface Patterns",
        label: "02 / Components",
        description:
          "Reusable interface elements and visual patterns used in the design.",
        visual: "website",
      },
      {
        title: "User Flow",
        label: "03 / Experience",
        description:
          "The planned flow through the app's key user interactions.",
        visual: "mobile-app",
      },
    ],
    caseStudy: {
      process: [
        "Explored the product's user experience and information structure.",
        "Organized the mobile screens and navigation flow.",
        "Developed the interface in Figma.",
        "Refined visual consistency across the designed screens.",
      ],
      solution:
        "A mobile-first skincare app design focused on accessible navigation and a consistent visual experience.",
      results: [
        "Produced a structured mobile UI/UX design direction.",
        "Applied consistent interface patterns.",
        "Practised product design workflows during SIWES.",
      ],
      sections: [
        {
          title: "Mobile Experience",
          description:
            "The design prioritizes clarity and comfortable navigation on smaller screens.",
          points: [
            "Mobile screen layouts",
            "Information hierarchy",
            "Consistent UI patterns",
          ],
        },
        {
          title: "Design Process",
          description:
            "The project provided practical experience with interface design and prototyping.",
          points: [
            "Figma-based design",
            "User flow planning",
            "Interface refinement",
          ],
        },
      ],
    },
  },
  {
    title: "RememberMe Task Manager",
    slug: "rememberme-task-manager",
    category: "UI/UX Design",
    format: "Case study",
    year: "2025",
    client: "SIWES Project",
    role: "UI/UX Designer",
    accent: "#00575c",
    visual: "mobile-app",
    summary:
      "A task management app concept designed to help users organize tasks and keep track of their responsibilities.",
    overview:
      "RememberMe was a task management product explored during SIWES, with a focus on organizing tasks through a mobile interface.",
    challenge:
      "Users need a clear way to view, organize, and keep track of tasks without making everyday planning feel complicated.",
    direction:
      "The design explored task organization, interface hierarchy, and mobile-friendly interaction patterns.",
    outcome:
      "A mobile product design project centered on task management and everyday productivity.",
    services: ["UI/UX Design", "Mobile App Design", "Prototyping"],
    tools: ["Figma", "FigJam"],
    highlights: [
      "Task management interface",
      "Mobile user flows",
      "Productivity-focused UI",
    ],
    goals: [
      "Make tasks easier to organize",
      "Keep task information easy to scan",
      "Create a straightforward mobile experience",
    ],
    metrics: [],
    gallery: [
      {
        title: "Task Overview",
        label: "01 / Task organization",
        description:
          "A mobile interface concept for viewing and organizing tasks.",
        visual: "mobile-app",
      },
      {
        title: "Task Details",
        label: "02 / Task flow",
        description:
          "An exploration of how task information and actions can be presented clearly.",
        visual: "mobile-app",
      },
      {
        title: "Interface System",
        label: "03 / UI patterns",
        description:
          "Consistent components and visual patterns across the product screens.",
        visual: "website",
      },
    ],
    caseStudy: {
      process: [
        "Considered common task management needs and user flows.",
        "Organized the mobile interface around task information.",
        "Designed screens and interactions in Figma.",
        "Refined the interface for clarity and consistency.",
      ],
      solution:
        "A task management app design concept that organizes everyday responsibilities within a clear mobile interface.",
      results: [
        "Developed a mobile task management design direction.",
        "Explored productivity-focused screen layouts.",
        "Applied reusable interface design patterns.",
      ],
      sections: [
        {
          title: "Task Organization",
          description:
            "The interface is designed to make tasks easier to understand and manage.",
          points: [
            "Task overview",
            "Task information hierarchy",
            "Clear interaction patterns",
          ],
        },
        {
          title: "Product Design",
          description:
            "The project focused on translating a productivity use case into a mobile interface.",
          points: [
            "Mobile-first screen design",
            "User flow exploration",
            "Consistent UI components",
          ],
        },
      ],
    },
  },
  {
    title: "Airline Travel App",
    slug: "airline-travel-app",
    category: "UI/UX Design",
    format: "Case study",
    year: "2025",
    client: "SIWES Project",
    role: "UI/UX Designer",
    accent: "#00acb5",
    visual: "mobile-app",
    summary:
      "An airline app concept exploring digital check-in, boarding passes, luggage tracking, and flight notifications.",
    overview:
      "The airline app project explored how key travel activities could be organized within a single mobile experience, from checking in to receiving flight updates.",
    challenge:
      "Travellers need access to important flight information and travel tasks without navigating disconnected experiences.",
    direction:
      "The design focused on organizing essential travel actions and making flight-related information accessible through mobile screens.",
    outcome:
      "A travel app design project covering important stages of the passenger journey.",
    services: ["UI/UX Design", "Mobile App Design", "User Flow Design"],
    tools: ["Figma", "FigJam"],
    highlights: [
      "Digital check-in",
      "Boarding pass experience",
      "Luggage tracking concept",
      "Flight notifications",
    ],
    goals: [
      "Simplify access to check-in",
      "Make boarding information easy to find",
      "Present luggage and flight updates clearly",
    ],
    metrics: [],
    gallery: [
      {
        title: "Check-in Experience",
        label: "01 / Passenger journey",
        description:
          "A flow exploring check-in availability, passenger registration, and boarding pass access.",
        visual: "mobile-app",
      },
      {
        title: "Luggage Tracking",
        label: "02 / Travel updates",
        description:
          "A concept for making luggage status and tracking information accessible to passengers.",
        visual: "mobile-app",
      },
      {
        title: "Flight Notifications",
        label: "03 / Flight information",
        description:
          "A mobile experience for communicating relevant flight updates and travel information.",
        visual: "mobile-app",
      },
    ],
    caseStudy: {
      process: [
        "Mapped key stages of the passenger journey.",
        "Organized the check-in and boarding pass flow.",
        "Explored luggage tracking and flight notification experiences.",
        "Designed the mobile interface in Figma.",
      ],
      solution:
        "A mobile airline app concept that brings check-in, boarding information, luggage tracking, and flight updates into one travel experience.",
      results: [
        "Defined a structured passenger journey.",
        "Explored the connection between check-in and boarding pass access.",
        "Designed concepts for luggage and flight status communication.",
      ],
      sections: [
        {
          title: "Passenger Journey",
          description:
            "The experience supports important steps before and during a flight.",
          points: [
            "Check-in availability",
            "Passenger registration and boarding pass",
            "Access to flight information",
          ],
        },
        {
          title: "Travel Updates",
          description:
            "The app explores ways to keep passengers informed about their journey.",
          points: [
            "Luggage tracking concept",
            "Flight update notifications",
            "Accessible travel information",
          ],
        },
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

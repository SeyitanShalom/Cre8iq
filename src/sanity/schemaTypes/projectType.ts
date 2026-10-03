import { defineArrayMember, defineField, defineType } from "sanity";

const visualOptions = [
  { title: "Brand system", value: "brand-system" },
  { title: "Dashboard", value: "dashboard" },
  { title: "Website", value: "website" },
  { title: "Social kit", value: "social-kit" },
  { title: "Mobile app", value: "mobile-app" },
  { title: "Landing page", value: "landing-page" },
];

const stringList = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "array",
    of: [defineArrayMember({ type: "string" })],
  });

const imageWithAlt = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alt text",
        type: "string",
        description:
          "Short description for accessibility and fallback display.",
      }),
    ],
  });

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "format",
      title: "Project format",
      type: "string",
      initialValue: "Simple project",
      options: {
        layout: "radio",
        list: ["Simple project", "Case study"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Graphic Design", "UI/UX Product Design", "Web Development"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured project",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "client",
      title: "Client name",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "accent",
      title: "Accent color",
      type: "string",
      initialValue: "#00acb5",
      description: "Hex color used for the generated mockup fallback.",
    }),
    defineField({
      name: "visual",
      title: "Fallback mockup style",
      type: "string",
      initialValue: "website",
      options: {
        list: visualOptions,
      },
    }),
    imageWithAlt("featuredImage", "Featured image"),
    defineField({
      name: "summary",
      title: "Short description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "fullDescription",
      title: "Full description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "challenge",
      title: "Challenge",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "direction",
      title: "Direction",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 4,
    }),
    stringList("services", "Services provided"),
    stringList("tools", "Tools used"),
    stringList("highlights", "Highlights"),
    stringList("goals", "Goals"),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Gallery images and mockups",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "visual",
              title: "Fallback mockup style",
              type: "string",
              options: { list: visualOptions },
            }),
            imageWithAlt("image", "Image"),
          ],
        }),
      ],
    }),
    defineField({
      name: "caseStudy",
      title: "Full case study content",
      type: "object",
      hidden: ({ parent }) => parent?.format !== "Case study",
      fields: [
        stringList("process", "Process steps"),
        defineField({
          name: "solution",
          title: "Solution",
          type: "text",
          rows: 4,
        }),
        stringList("results", "Results"),
        defineField({
          name: "sections",
          title: "Additional case study sections",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "title",
                  title: "Title",
                  type: "string",
                }),
                defineField({
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 4,
                }),
                stringList("points", "Points"),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "simpleProject",
      title: "Simple project content",
      type: "object",
      hidden: ({ parent }) => parent?.format !== "Simple project",
      fields: [
        defineField({
          name: "scope",
          title: "Scope",
          type: "text",
          rows: 4,
        }),
        stringList("deliverables", "Deliverables"),
        stringList("handoff", "Handoff"),
      ],
    }),
    defineField({
      name: "liveWebsiteUrl",
      title: "Live website link",
      type: "url",
    }),
    defineField({
      name: "externalDesignUrl",
      title: "External design link",
      type: "url",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});

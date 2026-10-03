import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homepage",
  title: "Homepage content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Internal title",
      type: "string",
      initialValue: "Homepage",
    }),
    defineField({
      name: "announcement",
      title: "Availability or announcement message",
      type: "string",
    }),
    defineField({
      name: "heroEyebrow",
      title: "Hero eyebrow",
      type: "string",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero subtext",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "primaryCtaText",
      title: "Primary CTA text",
      type: "string",
    }),
    defineField({
      name: "primaryCtaLink",
      title: "Primary CTA link",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaText",
      title: "Secondary CTA text",
      type: "string",
    }),
    defineField({
      name: "secondaryCtaLink",
      title: "Secondary CTA link",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Hero stats",
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
      name: "featuredProjects",
      title: "Featured projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }],
        }),
      ],
    }),
    defineField({
      name: "featuredServices",
      title: "Featured services",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "service" }],
        }),
      ],
    }),
    defineField({
      name: "featuredTestimonials",
      title: "Featured testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "testimonial" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "heroHeadline",
    },
  },
});

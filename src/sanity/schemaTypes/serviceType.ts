import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Service",
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
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Short summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "description",
      title: "Full description",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "category",
      title: "Service category",
      type: "string",
    }),
    defineField({
      name: "featured",
      title: "Featured service",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "process",
      title: "Process",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});

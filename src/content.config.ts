import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    year: z.number(),
    category: z.string(),
    tools: z.array(z.string()).default([]),
    repo: z.string().optional(),
    demo: z.string().optional(),
    figma: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
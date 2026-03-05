import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string().optional(),     // /images/projects/xxx.jpg
    year: z.number().optional(),
    tags: z.array(z.string()).optional(),
    repo: z.string().optional(),
    demo: z.string().optional(),
    stack: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
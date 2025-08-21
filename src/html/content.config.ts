import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

export const articleSchema = z.object({
  title: z.string(),
  titleSmall: z.string().max(50, 'Small title too large !'),
  subtitle: z.string().optional(),
  author: z.string(),
  pubblicationDate: z.string(),
  readTime: z.number().min(1).max(20),
  category: z.array(z.string()),
  tags: z.array(z.string()),
  thumbnail: z.object({
    src: z.string(),
    altText: z.string(),
  }),
});

//! Use the loader here
const article = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/article" }),
  schema: articleSchema,
});

export const collections = { 
  article,
};
import { defineCollection, z } from 'astro:content';

const article = defineCollection({
  schema: z.object({
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
  }),
});

export const collections = { 
  article, //...
};
import type { z } from 'astro:content';
import { articleSchema } from 'src/html/content.config';
type ArticleDataOBJ = Partial<z.infer<typeof articleSchema>>;

export type{
  ArticleDataOBJ, //...
}
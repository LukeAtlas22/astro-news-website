import type { ArticleStyleTemplate } from "../types/ArticleStyleTemplate"
import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import { AstroError } from "astro/errors";

const getArticleTemplate = async function (template: ArticleStyleTemplate): Promise<AstroComponentFactory> {
  let articleTemplate: AstroComponentFactory;

  try {
    articleTemplate = (await import(`../../templates/${template}.astro`)).default;
  } catch (err) {
    throw new AstroError(
      `<Article/> says: This article template - '${template}' - Does not exist! Please make sure you're declaring an existing article template`
    );
  }  
  return articleTemplate;
}

export {
  getArticleTemplate, //...
};
import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import { AstroError } from "astro/errors";

const getArticleTemplate = async function (type: string, template: string): Promise<AstroComponentFactory> {
  let articleTemplate: AstroComponentFactory;

  try {
    articleTemplate = (await import(`../../templates/${type}/${template}.astro`)).default;
  } catch (err) {
    throw new AstroError(
      `<Article/> says: This article template - '${template}' - for ${type} type Does not exist! Please make sure you're declaring an existing article template!`, 
      'You might want to check your declaration inside "template" prop - Or - ensure that you are not using <Article/> directly, but his interfaces (<NewsArticle>, <BlogPost>, <Recipe>, ecc... '
    );
  }  
  return articleTemplate;
}

export {
  getArticleTemplate, //...
};
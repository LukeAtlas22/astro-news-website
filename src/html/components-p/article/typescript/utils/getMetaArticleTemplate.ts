import type { AstroComponentFactory } from "astro/runtime/server/index.js"
import { AstroError } from "astro/errors";

const getMetaArticleTemplate = async function (type: string, template: number): Promise<AstroComponentFactory>{
  let metaTemplate: AstroComponentFactory;

  try {
    metaTemplate = (await import(`../../templates-meta/${type}/ArticleMeta-Layout-${template}.astro`)).default;
  } catch (err) {
    throw new AstroError(
      `<Article/> says: The Meta Template - '${template}' - Does not exist! Please make sure you're declaring an existing Meta template`
    )
  }
  return metaTemplate;
}

export {
  getMetaArticleTemplate, //...
};
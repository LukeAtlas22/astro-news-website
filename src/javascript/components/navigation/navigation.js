import { getNav } from "./utils/getters.js";
import { Element } from "../../utilities/elements/elements.js";
import { printMediaQueries } from "./print-media-queries.js";

export function initResponsiveNavigation(){
  if (! Element(getNav()).isFlexItem())
    throw new Error('The navigation must be inside a flexbox container to be responsive!')

  document.addEventListener('click', e => {
    printMediaQueries();
  });
}


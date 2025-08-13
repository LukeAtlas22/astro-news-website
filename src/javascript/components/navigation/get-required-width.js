import { getInlinePadding } from "./utils/get-inline-padding.js";
import { getGap } from "./utils/get-gap.js";
import { Element } from "../../utilities/elements/elements.js";
import { MINIMUM_ITEMS_TO_SHOW } from "./globals.js";
import { getItems } from "./utils/getters.js";


function getPreviousWidth(previousItems){
    const previousLength = previousItems.map(item => item.getBoundingClientRect().width).reduce((a, b) => (a + b), 0);
    const previousGap = getGap() * previousItems.length;
    const previousWidth = previousLength + previousGap;
    return previousWidth;
}
  

function getRequiredWidth(item){
    const previousItems = Element(item).getPrevSiblings();
    const previousWidth = getPreviousWidth(previousItems);
    let inlinePadding = 0;
    if (previousItems.length !== 0)
        inlinePadding = getInlinePadding(); 
    const correction = -1;
    const requiredWidth = previousWidth + item.getBoundingClientRect().width + inlinePadding + correction;
    return requiredWidth;
}

function adjustRequiredWidth(requiredWidths){
    if (MINIMUM_ITEMS_TO_SHOW > getItems().length)
        throw new Error('MINIMUM_ITEMS_TO_SHOW cannot be more than all the items of the navigation')

    if (MINIMUM_ITEMS_TO_SHOW !== 1){
        const treshold = MINIMUM_ITEMS_TO_SHOW - 1;
        requiredWidths.requiredWidth.forEach((width, i) => {
            if (i < treshold)
                requiredWidths.requiredWidth[i] = requiredWidths.requiredWidth[treshold];
        })
    }
    return requiredWidths;
}

export function getRequiredWidthForNavItems(nav, items){
    const requiredWidths = {
        item: [],
        requiredWidth: [],
    };

    const navItems = items;
    navItems.forEach(item => {
        requiredWidths.item.push(item);
        requiredWidths.requiredWidth.push(getRequiredWidth(item));
    })

    return adjustRequiredWidth(requiredWidths);
} 
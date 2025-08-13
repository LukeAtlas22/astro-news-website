import { getItems, getNav } from "./utils/getters.js";
import { getRequiredWidthForNavItems } from "./get-required-width.js";


const DISPLAY_HAMBURGER_MENU_AT = 1;
const DISPLAY_HAMBURGER_MENU = true;

const requiredWidths = getRequiredWidthForNavItems(getNav(), getItems())

export function getItemIndexAfterDisplayHambMenu(){
    return Array.from(getItems()).length - DISPLAY_HAMBURGER_MENU_AT + 1;
}

export function getWidthWhenDisplayHamburgerMenu(){
    const i = getItemIndexAfterDisplayHambMenu();
    const breakpoint = requiredWidths.requiredWidth[i - 1];
    return breakpoint;
}



export function getHamburgerMenuWidth(item){
    if (!DISPLAY_HAMBURGER_MENU)
        return 0;
    return 32;
}
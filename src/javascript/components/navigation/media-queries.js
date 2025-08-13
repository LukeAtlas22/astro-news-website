import { getRequiredWidthForNavItems } from "./get-required-width.js";
import { getNav, getItems } from "./utils/getters.js";
import { getGap } from "./utils/get-gap.js";
import { getInlinePadding } from "./utils/get-inline-padding.js";
import { getHamburgerMenuWidth, getWidthWhenDisplayHamburgerMenu } from "./hamburger-menu.js";
import { MINIMUM_ITEMS_TO_SHOW } from "./globals.js";
import { classes } from "./utils/getters.js";

//Todo (?) Rimuovere dall'hard code il nome dei container e le media query in generale?

const requiredWidths = getRequiredWidthForNavItems(getNav(), getItems())

// Simple items

export function getCSSMediaQueries(){
  const declarations = [];
  requiredWidths.requiredWidth.forEach((width, i) => {
    declarations.push(`
      // Displaying normal items in the mobile navigation
      @container --nav-list (width <= ${width}px) {
        .navigation__list-hamburger-item:nth-of-type(${i + 1}) {
          display: inline-flex;
        }
        .navigation__list-item:nth-of-type(${i + 1}) {
          display: none;
        }
      }
    `);
  });
  return(declarations.join('\n'));
}

// Hamburger menu

export function getCSSMediaQueryHamburgerMenu(){
    const breakpoint = getWidthWhenDisplayHamburgerMenu();
    return(`
        // Displaying the hamburger menu button
        @container --nav-list (width <= ${breakpoint}px) {
            .hamburger-button{
            display: block;  
            }
        }
    `);
}

export function getNavListMediaQueryAdjustPadding(){
  const breakpoint = getWidthWhenDisplayHamburgerMenu() + (getInlinePadding() * 2);
  return(`
    // Apply padding for the hamburger menu button
    @container --nav (width <= ${breakpoint}px) {
      .navigation__list {
        padding-right: calc(
          $nav-padding-inline + $nav-hamburger-menu-size + $nav-gap
        );
      }
    }
  `)
}

// Hide first items

function getBreakpointToHideFirstItem(){
  return getGap() + getHamburgerMenuWidth() + ( getInlinePadding() * 2 ) + requiredWidths.requiredWidth[MINIMUM_ITEMS_TO_SHOW - 1];
}

export  function getCSSMediaQueryToHideFirstItem(){
  const breakpoint = getBreakpointToHideFirstItem();
  return(`
    @container --nav (width <= ${breakpoint}px){
      //Hide every items from the desktop navigation, after ${breakpoint} px
      //! Sul container --nav però invece di togliere devo aggiungere, perchè non c'è nessun padding !
      //! +32px, +32px, +12px, +12px
      //? Quindi quest'ultima container query, per nascondere il primo elemento della navigation dev'essere aggiustata con...
      //! + Nav gap
      //! + Hamburger menu size
      //! + Inline padding * (2)
      .navigation__list-item {
        display: none;
      }

      .navigation__list {
        background-color: blue;
        //? Qui forse potrei fare qualcosa
        min-width: 0;
        gap: 0 !important;
        padding-inline: 0 !important;
        padding-right: 0 !important;
      }
    }
  `);
}

// Show remaining items

export function getCSSMediaQueryToShowRemainingItems(){
  const breakpoint = getBreakpointToHideFirstItem();
  const declarations = [];
  requiredWidths.requiredWidth.forEach((width, i ) => {
    if (i < MINIMUM_ITEMS_TO_SHOW){
      declarations.push(`
        .${classes.listHamburgerItems}:nth-of-type(${i+1}){
          display: inline-flex;
        }
      `)
    }
  })
  return (`
    @container --nav (width <= ${breakpoint}px){
      ${declarations.join('\n')}
    }
  `);
}
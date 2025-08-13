import { getCSSMediaQueries, getCSSMediaQueryHamburgerMenu, getCSSMediaQueryToHideFirstItem, getCSSMediaQueryToShowRemainingItems, getNavListMediaQueryAdjustPadding } from "./media-queries.js";

export function printMediaQueries(){
  console.log(
    `
      // ============= Hide desktop nav when threshold items is reached ===============
      ${getCSSMediaQueryToHideFirstItem()}

      // ================================ Show remaining item ==========================
      ${getCSSMediaQueryToShowRemainingItems()}

      // ================================ Simple Items ================================
      ${getCSSMediaQueries()}

      // ================================ Display Hamburger Menu ======================
      ${getCSSMediaQueryHamburgerMenu()}

      // ================================ Padding for Hamburger Menu ===================
      ${getNavListMediaQueryAdjustPadding()}
    `
  );
}
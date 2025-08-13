import { writeFileSync } from 'fs';
import { getCSSMediaQueries, getCSSMediaQueryHamburgerMenu, getCSSMediaQueryToHideFirstItem, getCSSMediaQueryToShowRemainingItems, getNavListMediaQueryAdjustPadding } from "./media-queries.js";

const fileContent = `
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
    `;
const fileName = '_this-is-a-test.scss.scss';
const filePath = 'src/sass/components/others/responsive-navigation/';

writeFileSync((filePath+fileName), fileContent);

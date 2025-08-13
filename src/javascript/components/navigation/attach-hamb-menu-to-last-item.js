import { getNav } from "./utils/getters"
import { getItems } from "./utils/getters";
import { getHamburgerItems } from "./utils/getters";
import { getCustomPropertyBoolean } from "../../utilities/computed-styles/get-custom-properties";

function getNavItemsRects(){
  //If we are not in desktop list
  const items = getItems();
  return Array.from(items).map(item => item.getBoundingClientRect());
}

const anchorName = '--hamburger-menu-anchor';
const anchorNameFirst = '--first-item';
const anchorNameLast = '--last-item';
const anchorNameNavItem = '--navigation-list-item';

export function attachHamburgerMenuToLastItem(){
  const nav = getNav();
  const ONLY_SHOW_LINKS_MISSING_FROM_DESKTOP_NAV = getCustomPropertyBoolean({from: nav, get: '--m-only-show-links-missing-from-desktop-nav'});
  console.log(ONLY_SHOW_LINKS_MISSING_FROM_DESKTOP_NAV);
  const breakpointIndexItem = 2;
  const navRect = nav.getBoundingClientRect();
  const items = getItems();
  const mobileItems = getHamburgerItems();
  
  function dinamicallyChangeAnchor(){
    const itemsRects = getNavItemsRects();

    itemsRects.forEach((rect, i) => {
      // Todo Cambiare con if item outside boundaries
      if (rect.bottom > navRect.bottom){
        items[i].style.anchorName = 'none';
        items[i].style.visibility = 'hidden';
        if (i === breakpointIndexItem - 1)
          nav.style.setProperty('--hide-desktop-list', 'true');
        if ((i + 1) === items.length)
          nav.style.setProperty('--display-hamburger-menu', 'true');
        if (ONLY_SHOW_LINKS_MISSING_FROM_DESKTOP_NAV)
          mobileItems[i].style.setProperty('--show', 'true');
      }
      // Todo Cambiare con if item outside boundaries
      if (rect.bottom <= navRect.bottom){
        items[i].style.visibility = 'visible';
        if ((i + 1) === items.length)
          nav.style.setProperty('--display-hamburger-menu', 'false');
        if (i === 0)
          items[i].style.anchorName = `${anchorName}, ${anchorNameFirst}, ${anchorNameLast}, ${anchorNameNavItem}`;
        else
          items[i].style.anchorName = `${anchorName}, ${anchorNameLast}, ${anchorNameNavItem}`;

        if (ONLY_SHOW_LINKS_MISSING_FROM_DESKTOP_NAV)
          mobileItems[i].style.setProperty('--show', 'false');
      }
    });
  }

  function uncheckHamburger(){
    document.querySelector('.hamburger-menu-checkbox').checked = false;
  }

  window.addEventListener('resize', (e) => {
    dinamicallyChangeAnchor();
    
    // Uncheck hamburger on resize [Todo - write it as func]
    if (document.querySelector('.hamburger-menu-checkbox').checked === true)
      uncheckHamburger();

  });
}
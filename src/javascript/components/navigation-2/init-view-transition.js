import { startViewTransition } from "../../utilities/view-transition/view-transition";
import { closeMobileList, openMobileList } from "./open-mobile-list";

const checkbox = document.querySelector('.hamburger-menu-checkbox');

export function initViewTransitionHandler(){
  document.getElementById('hamburger-menu-btn').addEventListener('click', (e) => {
    if (checkbox.checked === false)
      startViewTransition({VisualUpdates: openMobileList});
    if (checkbox.checked === true)
      closeMobileList();
  });
}

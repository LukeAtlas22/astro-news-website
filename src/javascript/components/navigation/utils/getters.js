export const classes = {
  nav: "navigation",
  list: "navigation__list",
  menuHamburgerBtn: "hamburger-button",
  listHamburger: "navigation__list-hamburger",
  items: "navigation__list-item",
  listHamburgerItems: "navigation__list-hamburger-item",
  links: "navigation__link",
  linksHamburger: "navigation__link-hamburger",

  nestedListDesktop: 'navigation__nested-list',
  nestedListItemDesktop: 'navigation__nested-list-item',
  nestedLinkDesktop: 'navigation__nested-link',
  nestedListHamburger: 'navigation__nested-list-hamburger',
  nestedListItemHamburger: 'navigation__nested-list-item-hamburger',
  nestedLinkHamburger: 'navigation__nested-link-hamburger',
};

export function getNav(){
  return document.querySelector('.' + classes.nav);
}

export function getNavListItem(nth){
  return getNav().querySelector(`li:nth-of-type(${nth})`);
}

export function getList(){
  return getNav().querySelector('.' + classes.list);
}

export function getHamburgerMenu(){
  return getNav().querySelector('.' + classes.menuHamburgerBtn);
}

export function getListHamburger(){
  return getNav().querySelector('.' + classes.listHamburger);
}

export function getItems(){
  return getList().querySelectorAll('.' + classes.items);
}

export function getHamburgerItems(){
  return getNav().querySelectorAll('.' + classes.listHamburgerItems);
}

export function getLinks(){
  return getList().querySelectorAll('.' + classes.links);
}

export function getLinksHamburger(){
  return getListHamburger().querySelectorAll('.' + classes.links);
}
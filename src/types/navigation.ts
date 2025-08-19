type BaseNavigation = {
  /**
   * Se it to true if you want the navigation to be responsive (It will use a javascript module)
   */
  responsive?: boolean,
  /**
   * If the navigation is not inside an header, or a footer, or anyway inside any element that has an active container type value, then set this property on true, to initialize selfContainment
   */
  selfContained?: boolean,
}

type Navigation =
  | (BaseNavigation & { links: string; items?: never })
  | (BaseNavigation & { items: Array<NavigationItem>; links?: never });




type NavigationItem = {
  link: string,
  icon?: string,
  slug?: string,
  nested?: Array<NavigationItem>,
}

export type {
  Navigation, NavigationItem, //...
}
type ClonerConfigOBJ = {
  /**
   * The element you want to clone
   */
  clone: Element,
  /**
   * Do you want to keep the id? Default: false
   */
  keepID?: boolean,
  /**
   * Do you want to keep the classes? Default: true
   */
  keepClass?: boolean,
  /**
   * Do you want to keep the attributes? Default: true
   */
  keepAttr?: boolean,
}
const Cloner = (config: ClonerConfigOBJ): Element => {
  const clone = config.clone;
    // Gestione ID
  if (!config.keepID) {
    clone.removeAttribute("id");
  }

  // Gestione classi
  if (config.keepClass === false) {
    clone.removeAttribute("class");
  }

  return config.clone.cloneNode(true) as Element;
}

export {
  Cloner, //....
}
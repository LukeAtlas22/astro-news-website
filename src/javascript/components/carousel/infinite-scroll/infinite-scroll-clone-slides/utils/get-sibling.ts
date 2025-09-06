const SiblingGetter = (carousel: HTMLElement) => {
  /**
   * 
   * @param n The number of the sibling from the last one (2 is the sibling before the last, 1 is the last, ecc...)
   * @returns 
   */
  function getSiblingFromEnd(n: number): Element {
  let element = carousel.lastElementChild;
  let count = 1; // si parte dall’ultimo = posizione 1

  while (element && count < n) {
    element = element.previousElementSibling;
    count++;
  }
  if (!element) 
    throw Error('Something went wrong')
  return element; // null se non esiste
}
/**
 * 
 * @param n The number of the sibling from the first one (3 is the third sibling)
 * @returns 
 */
function getSiblingFromStart(n: number): Element {
  let element = carousel.firstElementChild;
  let count = 1; // si parte dal primo = posizione 1

  while (element && count < n) {
    element = element.nextElementSibling;
    count++;
  }
  if (!element) 
    throw Error('Something went wrong')
  return element; // null se non esiste
}

  return {
    getSiblingFromEnd, getSiblingFromStart
  }

}

export {
  SiblingGetter,
}
import { parseHTML } from 'linkedom'

const getSlideAmount = function(html: string): number {
  const {document} = parseHTML(html);
  const slotLength = Array.from(document.children).length;
  return slotLength;
}

export { getSlideAmount };
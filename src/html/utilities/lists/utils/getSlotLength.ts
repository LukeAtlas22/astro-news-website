
import { parseHTML } from 'linkedom'

const getSlotLength = function(html: string): number {
  const {document} = parseHTML(html);
  const slotLength = Array.from(document.children).length;
  return slotLength;
}

export { getSlotLength };
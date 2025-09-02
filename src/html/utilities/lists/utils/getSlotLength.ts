
import { parseHTML } from 'linkedom'
import { wrap } from 'module';

const getSlotLength = function(html: string): number {
  const {document} = parseHTML(html);
  const slotLength = Array.from(document.children).length;
  return slotLength;
}


type wrapperConfigurator = {
  elements: Array<Element>,
  classList?: string,
  wrapper: 'li' | 'dd',
  html: unknown,
};

const wrapper = function(config: wrapperConfigurator): Array<Element> {
  const {document} = parseHTML(config.html);
  const wrappedElements = config.elements.map((element: Element) => {
    const li = document.createElement(`${config.wrapper}`);
    if (config.classList)
      li.classList.add(config.classList);
    li.appendChild(element);
    return li;
  })
  return wrappedElements;
}

export { getSlotLength, wrapper };
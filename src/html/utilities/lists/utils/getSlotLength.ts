
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
  setIndex?: boolean,
  html: unknown,
};

const wrapper = function(config: wrapperConfigurator): Array<Element> {
  const {document} = parseHTML(config.html);
  const wrappedElements = config.elements.map((element: Element, i: number) => {
    const li = document.createElement(`${config.wrapper}`);
    if (config.classList)
      li.classList.add(config.classList);
    // Temporaney - Shitcode
      li.id = `${config.id}-slide-${i + 1}`;
      li.dataset.index = `${i + 1}`;
    li.appendChild(element);
    return li;
  })
  return wrappedElements;
}

export { getSlotLength, wrapper };
const CurrentSlideHelper = () => {
  let currentSlide: Element;

  return {
      update:  (slide: Element): Element =>  {
        currentSlide = slide;
        return currentSlide;
      },

      get: (): Element => {
        return currentSlide;
    }
  }
}

export {
  CurrentSlideHelper, //...
}
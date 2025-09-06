const safelyResolveShownSlides = (SHOWN_SLIDES: number): number => {
  if (SHOWN_SLIDES < 1)
    throw new Error(`Shown slides can't be less than 1`)
  if (! SHOWN_SLIDES)
    throw new Error(`Shown slides can't be null`)
  if (SHOWN_SLIDES < 3)
    return 3;
  return SHOWN_SLIDES;
} 

/**
 * 
 * @param carousel 
 * @return The number of shown slides inside a carousel frame
 */
const getShownSlides = (carousel: Element): number => {
  // Note spostare questo in un dinamyc import, solo a utilità della seconda condizione
  const slide = carousel.querySelector<HTMLElement>(".carousel__slide");
    if(! slide)
      throw new Error('Cant find slide, check selector');
  const slideWidth = slide.offsetWidth;
  const carouselWidth = (carousel as HTMLElement).clientWidth;
  const SHOWN_SLIDES = Math.round(carouselWidth / slideWidth);

  return safelyResolveShownSlides(SHOWN_SLIDES);
};

export {
  getShownSlides,
}
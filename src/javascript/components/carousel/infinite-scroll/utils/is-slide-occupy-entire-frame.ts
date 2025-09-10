/**
 * Verifica se una singola slide occupa il 100% della larghezza del frame
 * 
 * @param carousel Elemento contenitore del carousel
 * @returns true se la slide occupa l'intero frame, altrimenti false
 */
const isSlideOccupyEntireFrame = (carousel: Element): boolean => {
  const slide = carousel.querySelector<HTMLElement>(".carousel__slide");
  if (!slide)
    throw new Error('Cant find slide')

  const slideWidth = slide.offsetWidth;
  const carouselWidth = (carousel as HTMLElement).clientWidth;
  return slideWidth === carouselWidth;
};

export {
  isSlideOccupyEntireFrame,
}
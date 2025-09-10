import { CurrentSlideHelper } from "./scroll-handler-utils/current-slide";
import { isSlideSafe } from "./scroll-handler-utils/is-slide-safe";
import { getClosestSlide } from "./scroll-handler-utils/get-closest-slide";

const handleScroll = (wrapper: Element) => {
  const navigation = wrapper.querySelector('.carousel__navigation');
  const carousel = wrapper.querySelector('.carousel');
  const carouselSlides: Element[] = Array.from(carousel.querySelectorAll('.carousel__slide'));
  const CurrentSlide = CurrentSlideHelper();

  carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
    CurrentSlide.update(e.snapTargetInline);
  });

  navigation.addEventListener('pointerdown', (e) => {
    e.preventDefault();

    if (!event.target.dataset.index) 
      return

    const clickedMarker = event?.target;
    if (!clickedMarker)
      return

    if (clickedMarker.dataset.index === CurrentSlide.get().dataset.index)
      return

    const CLICKED_MARKER_INDEX = clickedMarker.dataset.index;
    const candidateSlides = Array.from(carousel.querySelectorAll(`.carousel__slide[data-index="${CLICKED_MARKER_INDEX}"]`));
    const closestSlide = getClosestSlide(CurrentSlide.get(), candidateSlides, carouselSlides);
    
    let target: Element | null = null;

    if (isSlideSafe(closestSlide)) 
      target = closestSlide;
    else 
      target = candidateSlides.find(slide => isSlideSafe(slide)) ?? candidateSlides[0];
    
    if (target) 
      target.scrollIntoView({ behavior: "smooth", inline: "center" });
  });
}


export {
  handleScroll
}
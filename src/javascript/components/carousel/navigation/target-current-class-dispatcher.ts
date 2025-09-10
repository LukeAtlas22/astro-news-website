
const TARGET_CURRENT_CLASS_NAME = 'target-current';
const NAVIGATION_CLASS_NAME = 'carousel__navigation';

const dispatchTargetCurrentClassOnMarkers = (carouselWrapper: Element): void => {
 
  const getTarketMarker = (currentSlide: Element): Element => {
    return navigation.querySelector(`a[data-index="${currentSlide.dataset.index}"]`);
  }

  const carousel = carouselWrapper.querySelector('.carousel');
  const navigation = carouselWrapper.querySelector('.' + NAVIGATION_CLASS_NAME);
    
  carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
    // Removing every target current class before actually dispatching
    navigation.querySelectorAll('a').forEach(link => link.classList.remove(TARGET_CURRENT_CLASS_NAME));
    const targetMarker = getTarketMarker(e.snapTargetInline);
    targetMarker?.classList.add(TARGET_CURRENT_CLASS_NAME);
  })
}

export {
  dispatchTargetCurrentClassOnMarkers
}


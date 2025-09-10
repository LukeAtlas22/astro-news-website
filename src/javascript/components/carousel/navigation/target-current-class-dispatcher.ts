
const TARGET_CURRENT_CLASS_NAME = 'target-current';
const NAVIGATION_CLASS_NAME = 'carousel__navigation';
const SCROLL_MARKER_CLASS_NAME = 'carousel__scroll-marker';

const dispatchTargetCurrentClassOnMarkers = (carouselWrapper: Element): void => {
  const getTarketMarker = (currentSlide: Element): Element => {
    return navigation.querySelector(`a[data-index="${currentSlide.dataset.index}"]`);
  }
  
  const carousel = carouselWrapper.querySelector('.carousel');
  const navigation = carouselWrapper.querySelector('.' + NAVIGATION_CLASS_NAME);
  const scrollMarkers = navigation.querySelectorAll('.' + SCROLL_MARKER_CLASS_NAME);
    
  carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
    scrollMarkers.forEach(marker => marker.classList.remove(TARGET_CURRENT_CLASS_NAME));
    getTarketMarker(e.snapTargetInline).classList.add(TARGET_CURRENT_CLASS_NAME);
  })
}

export {
  dispatchTargetCurrentClassOnMarkers
}


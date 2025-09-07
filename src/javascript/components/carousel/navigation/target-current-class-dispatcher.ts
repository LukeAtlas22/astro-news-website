const TARGET_CURRENT_CLASS_NAME = 'target-current';
const NAVIGATION_CLASS_NAME = 'carousel__scroll-marker-group--artificial';

const dispatchTargetCurrentClassOnMarkers = (carouselWrapper: Element): void => {
  console.log('Test');
  const carousel = carouselWrapper.querySelector('.carousel');
  const navigation = carouselWrapper.querySelector('.' + NAVIGATION_CLASS_NAME);
    
  carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
    // Removing every target current class before actually dispatching
    navigation.querySelectorAll('a').forEach(link => link.classList.remove(TARGET_CURRENT_CLASS_NAME));
    
    const targetSlideId = e.snapTargetInline.id; // (Always get the inline target)
    const targetMarker = navigation.querySelector(`a[href="#${targetSlideId}"`);
    targetMarker?.classList.add(TARGET_CURRENT_CLASS_NAME);
  })
}

const initNavigation = (): void => {
  document.querySelectorAll('.carousel__wrapper').forEach( (wrapper: Element) => {
    dispatchTargetCurrentClassOnMarkers(wrapper);
  })
} 

export {
  initNavigation, //...
}
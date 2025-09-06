const TARGET_CURRENT_CLASS_NAME = 'target-current';

const dispatchTargetCurrentClassOnMarkers = (carousel: Element, navigation: Element): void => {
    carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
        // Removing every target current class before actually dispatching
        navigation.querySelectorAll('a').forEach(link => link.classList.remove(TARGET_CURRENT_CLASS_NAME));
        
        const targetSlideId = e.snapTargetInline.id; // (Always get the inline target)
        const targetMarker = navigation.querySelector(`a[href="#${targetSlideId}"`);
        targetMarker?.classList.add(TARGET_CURRENT_CLASS_NAME);
    })
}

export {
  dispatchTargetCurrentClassOnMarkers, //...
}
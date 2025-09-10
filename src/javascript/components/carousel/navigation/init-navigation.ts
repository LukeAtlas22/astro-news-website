import { isSlideOccupyEntireFrame } from "../infinite-scroll/utils/is-slide-occupy-entire-frame";
import { handleScroll } from "./scroll-handler";
import { dispatchTargetCurrentClassOnMarkers } from "./target-current-class-dispatcher";


const initNavigation = (): void => {
  document.querySelectorAll('.carousel__wrapper').forEach( (wrapper: Element) => {
    dispatchTargetCurrentClassOnMarkers(wrapper);
    handleScroll(wrapper);
  });
} 

export {
  initNavigation, //...
}
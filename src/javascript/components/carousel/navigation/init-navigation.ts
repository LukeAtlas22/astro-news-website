import { dispatchTargetCurrentClassOnMarkers } from "./target-current-class-dispatcher";
import { isSlideOccupyEntireFrame } from "../infinite-scroll/utils/is-slide-occupy-entire-frame";

const initNavigation = async (): Promise<void> => {
  const wrappers = document.querySelectorAll('.carousel__wrapper');
  for (const wrapper of wrappers) {

    dispatchTargetCurrentClassOnMarkers(wrapper);

    if (! isSlideOccupyEntireFrame(wrapper.querySelector('.carousel'))) {
      const module = await import("./scroll-handler");
      module.handleScroll(wrapper);
    }

  }
};

export {
  initNavigation, //...
}
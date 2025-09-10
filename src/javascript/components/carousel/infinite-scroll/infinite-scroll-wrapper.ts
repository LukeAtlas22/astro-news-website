import { isSlideOccupyEntireFrame } from "./utils/is-slide-occupy-entire-frame";

/**
 * Checks the number of shown slides in the carousel frame and subsequently call the right scroll infinitizer
 * @param carousel 
 */
const initInfiniteScroll = async (carousel: Element): Promise<void> => {

  const IS_SLIDE_OCCUPY_ENTIRE_FRAME = isSlideOccupyEntireFrame(carousel);

  if (IS_SLIDE_OCCUPY_ENTIRE_FRAME) {
    const { initInfiniteScroll } = await import("./infinite-scroll-change-order/infinite-scroll-change-order");
    initInfiniteScroll(carousel);
  }
  if (! IS_SLIDE_OCCUPY_ENTIRE_FRAME ) {
    const { initInfiniteScroll } = await import ("./infinite-scroll-clone-slides/infinite-scroll-multiple-shown-slides");
    initInfiniteScroll(carousel);
  }
}

export {
  initInfiniteScroll,
}
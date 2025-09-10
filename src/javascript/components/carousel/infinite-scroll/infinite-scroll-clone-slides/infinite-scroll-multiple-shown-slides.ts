import { getShownSlides } from "./utils/get-shown-slide";
import { SiblingGetter } from "./utils/get-sibling";
import { CreateSubsequentUtilities } from "./utils/subsequent";
import { Cloner } from "./utils/cloner";

const initInfiniteScroll = (carousel: Element): void => {

  const slides = carousel.querySelectorAll('.carousel__slide');
  /* Se usiamo il cloner, rimuoviamo l'id */
  slides.forEach(slide => slide.removeAttribute('id'));

  const firstSlideClone = Cloner({clone: slides[0], keepID: true});
  const lastSlideClone = Cloner({clone: slides[slides.length - 1], keepID: true});
  const SHOWN_SLIDE_AMOUNT = getShownSlides(carousel); 
  
  const SubSequentOBJECT = CreateSubsequentUtilities(Array.from(slides), SHOWN_SLIDE_AMOUNT);
  const SubsAfterArray = SubSequentOBJECT.getAfterArray();
  const SubBeforeArray = SubSequentOBJECT.getBeforeArray();

  
  // Setting bridges
  lastSlideClone.dataset.bridge = 'B';
  slides[0].dataset.bridge = 'B';

  slides[slides.length - 1].dataset.bridge = 'A';
  firstSlideClone.dataset.bridge = 'A';
  

  carousel.appendChild(firstSlideClone);
  carousel.prepend(lastSlideClone);


  const INNER_BLOCK_SELECTOR = `.carousel__slide:not([data-bridge])`;
  const innerBlock = carousel.querySelectorAll(INNER_BLOCK_SELECTOR);

  const SiblingUtils = SiblingGetter(carousel);
  
  carousel.addEventListener('scrollsnapchange', (e: SnapEvent) => {

    // Debug purpose, do not remove
    // e.target.querySelectorAll('.carousel__slide').forEach((item: HTMLElement) => item.classList.remove('On-It!'));
    // e.snapTargetInline.classList.add('On-It!');


     if (e.snapTargetInline === SiblingUtils.getSiblingFromEnd(SHOWN_SLIDE_AMOUNT)) {
       SubsAfterArray.forEach(item => { carousel.appendChild(item)})
       SubBeforeArray.forEach(item => { carousel.prepend(item) })
     }

     if (e.snapTargetInline === SiblingUtils.getSiblingFromEnd(SHOWN_SLIDE_AMOUNT - 1) ){  //Todo - Da cambiare Bridge Trigger Change
    
       const currentBridge = e.snapTargetInline.dataset.bridge;
       const FAR_BRIDGE_SELECTOR = `.carousel__slide[data-bridge]:not([data-bridge="${currentBridge}"])`;
       const farthestBridge = carousel.querySelectorAll(FAR_BRIDGE_SELECTOR);

       innerBlock.forEach(node => {
         carousel.appendChild(node);
       })
       farthestBridge.forEach(node => {
         carousel.appendChild(node);
       })
       SubsAfterArray.forEach(item => { item.remove() })
       SubBeforeArray.forEach(item => { item.remove() })
       SubBeforeArray.forEach(item => carousel.prepend(item));
     }

     if (e.snapTargetInline === SiblingUtils.getSiblingFromStart(SHOWN_SLIDE_AMOUNT)) {
       SubsAfterArray.forEach(item => { carousel.appendChild(item)})
       SubBeforeArray.forEach(item => { carousel.prepend(item) })
     }

    if (e.snapTargetInline === SiblingUtils.getSiblingFromStart(SHOWN_SLIDE_AMOUNT - 1) ){ 
    
      const currentBridge = e.snapTargetInline.dataset.bridge;
      const FAR_BRIDGE_SELECTOR = `.carousel__slide[data-bridge]:not([data-bridge="${currentBridge}"])`;
      const farthestBridge = carousel.querySelectorAll(FAR_BRIDGE_SELECTOR);

      const ref = carousel.firstElementChild;
      farthestBridge.forEach(node => carousel.insertBefore(node, ref));
      innerBlock.forEach(node => carousel.insertBefore(node, ref));
      
      SubsAfterArray.forEach(item => { item.remove() })
      SubBeforeArray.forEach(item => { item.remove() })
      SubBeforeArray.forEach(item => carousel.appendChild(item));
    }

    
    // Save from strange behaviour of scroll-view-timeline (black)
    e.snapTargetInline.classList.add('save-from-black');
  });

  // Preventing the slides keeping opacity 1 when snap changing again
  carousel.addEventListener('scrollsnapchanging', (e) => {
    carousel.querySelectorAll('.carousel__slide').forEach(slide => slide.classList.remove('save-from-black'));
    
  });

  carousel.addEventListener('pointerdown', (e) => {
    carousel.querySelectorAll('.carousel__slide').forEach(slide => slide.classList.remove('save-from-black'));
  })
}

export {
  initInfiniteScroll, //....
}
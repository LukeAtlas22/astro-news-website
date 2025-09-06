import { Cloner } from "./cloner";

function getNumberOfSubsequent(SHOWN_SLIDE_AMOUNT: number): number{
  return Math.max(1, SHOWN_SLIDE_AMOUNT - 2);
}

// Note - Need Carousel as Closure & number of shown slide as Closure

function CreateSubsequentUtilities(slides: Array<Element>, SHOWN_SLIDE_AMOUNT: number) {
  
  const SUBSEQUENT_AMOUNT = getNumberOfSubsequent(SHOWN_SLIDE_AMOUNT) // Closure :D

  function getAfterArray(): Array<Element> {
     const afterArray = [];
     for (let i = 1; i <= SUBSEQUENT_AMOUNT; i++) {
       afterArray.push(Cloner({clone: slides[i]}))
     }
     afterArray.forEach(item => item.dataset.subsequent = 'A');
     return afterArray;
  }
  
  function getBeforeArray(): Array<Element> {
    
    const beforeArray: Array<Element> = [];
    for (let i = slides.length - 2; i > (slides.length - 2) - SUBSEQUENT_AMOUNT; i-- ) { // Note I Don't know if i am safe yet here
      beforeArray.push(Cloner({clone: slides[i]}))
    }
    beforeArray.forEach(item => item.dataset.subsequent = 'B')
    return beforeArray;
  }

  return {
    getAfterArray, getBeforeArray,
  }
}

export {
  CreateSubsequentUtilities
}


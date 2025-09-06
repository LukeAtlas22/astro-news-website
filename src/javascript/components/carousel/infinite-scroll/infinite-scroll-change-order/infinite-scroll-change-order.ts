// #region Utilities

function isLastSibling(slide){
    if(slide.nextElementSibling == null)
        return true;
    else return false;
}
function isFirstSibling(slide){
    if(slide.previousElementSibling == null)
        return true;
    else return false;
}


function IsMiddleSibling(slide){
    if(slide.nextElementSibling != null && slide.previousElementSibling != null)
        return true;
    else return false;
}

function CSS_ChangeOrder({targetEl, order}){
    try{
        targetEl.style.order = order;
    }
    catch{
        throw new Error('Target Element is null');
    }
}

// #endregion

// Note - Ma in realtà questo è buono - E con duplication funzoinerebbe ancora meglio

export function byChangingOrder(e){
    const carousel = e.target;
    const snappedTarget = e.snapTargetBlock ? e.snapTargetBlock : e.snapTargetInline;

    

    if (isLastSibling(snappedTarget) || isFirstSibling(snappedTarget)){
        CSS_ChangeOrder({
            targetEl: carousel.lastElementChild,
            order: -1,
        });
        CSS_ChangeOrder({
            targetEl: carousel.lastElementChild.previousElementSibling, // Element before last
            order: -2,
        });
    }
    if (IsMiddleSibling(snappedTarget)){
        setTimeout(() => {
            CSS_ChangeOrder({
                targetEl: carousel.lastElementChild.previousElementSibling, // Element before last
                order: '',
            });
        }, 0)
        setTimeout(() => {
            CSS_ChangeOrder({
                targetEl: carousel.lastElementChild, // Last element
                order: '',
            });
        }, 0)
    }


    snappedTarget.classList.add('save-from-black');
}


const initInfiniteScroll = (carousel: HTMLElement) => {
    carousel.addEventListener('scrollsnapchange', (e) => {
        byChangingOrder(e);
    });

    // Preventing the slides keeping opacity 1 when snap changing again
  carousel.addEventListener('scrollsnapchanging', (e) => {
    carousel.querySelectorAll('.carousel__slide').forEach(slide => slide.classList.remove('save-from-black'));
  })
  carousel.addEventListener('pointerdown', (e) => {
    carousel.querySelectorAll('.carousel__slide').forEach(slide => slide.classList.remove('save-from-black'));
  })
}






export {
  initInfiniteScroll, //....
}
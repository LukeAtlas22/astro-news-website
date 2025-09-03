const byChangingOrder = (e: SnapEvent): void => {
    const carousel = e.target;
    // We are using flex with horizontal alignment - & Only changing the writing-mode of the carousel-frame, so the snapped target it's always snapTargetInlinte
    const snappedTarget = e.snapTargetInline;
        if (!snappedTarget)
            console.warn('No snapped target for: ', carousel);

    console.log('Event: ', e);
    console.log('Snapped: ', snappedTarget);
    console.log('Previous: ', snappedTarget.previousElementSibling);

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
        CSS_ChangeOrder({
            targetEl: carousel.lastElementChild.previousElementSibling, // Element before last
            order: '',
        });
        setTimeout(() => {
            CSS_ChangeOrder({
                targetEl: carousel.lastElementChild, // Last element
                order: '',
            });
        }, 0)
    }
}

const byDuplicateElements = (carousel: Element): void => {
    // To write
    // const slides = carousel.querySelectorAll('.carousel__slide');
    // console.log(slides);
    // slides.forEach((slide: Element) => {
    //     const clone = slide.cloneNode(true) as Element;
    //     clone
    //     carousel.appendChild(clone);
    // });
    // Note - Devo rifare gli scroll marker prima di fare questo
}

// #region Utilities Duplicate

// #endregion

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

export {
    byChangingOrder, byDuplicateElements, //...
}
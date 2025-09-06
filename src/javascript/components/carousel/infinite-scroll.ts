

// #region Utilities Duplication (Clones)

function slidesUtilityWrapper(carousel: HTMLUListElement) {

    const CAROUSEL_SLIDE_AMOUNT = carousel.style.getPropertyValue('--carousel-slide-amount');

    function isFirstReal (slide: HTMLLIElement): boolean {
        return (! slide.hasAttribute('clone')) && (slide.dataset.index === '1');
    }

    function isLastReal (slide: HTMLLIElement): boolean {
        return (! slide.hasAttribute('clone')) && (slide.dataset.index === CAROUSEL_SLIDE_AMOUNT);
    }

    function isFirstClone (slide: HTMLElement): boolean {
        return (slide.hasAttribute('clone')) && (slide.dataset.index ==='1');
    }

    function isLastClone (slide: HTMLLIElement): boolean {
        return (slide.hasAttribute('clone')) && (slide.dataset.index === CAROUSEL_SLIDE_AMOUNT);
    }

    function is(config: {attr: string, index: string}, slide:HTMLLIElement){
        return (slide.hasAttribute(config.attr)) && (slide.dataset.index === config.index)
    }

    return {
        isFirstReal,
        isLastReal,
        isFirstClone,
        isLastClone,
        is,
    };
}
////////////////

function getSlideToMove(config): number {

}

function moveClonesBefore(carousel: Element): void {

}

function moveClonesAfter(carousel: Element): void {

}

function moveRealsBefore(carousel: Element): void {
    // Select everything except last
    const slideToMove = carousel.querySelectorAll('[data-index]:not([data-index="6"]):not([clone])');
    console.log(slideToMove);
    slideToMove.forEach(slide => carousel.prepend(slide));
}

function moveRealsAfter(carousel: Element): void {

}




// #endregion

const dinamicallyMoveElements_For_InfiniteScroll = (carousel: HTMLUListElement): void => {
    console.log('Debug');
    const slideUtilsObj = slidesUtilityWrapper(carousel);
    carousel.addEventListener('scrollsnapchanging', (e: SnapEvent) => {
        const slide = e.snapTargetInline;
        slideUtilsObj.isLastClone(slide) && moveRealsBefore(carousel);
    })
}

// Note - Elements Cloner
// Note - Qui sarà importante capire come clonare gli elementi, se soltanto il primo e l'ultimo - oppure clonare più set
// Note - Dipende da quante slide stiamo mostrando all'interno della frame ^

// Note - Funzionalità base - Clona soltanto il primo e l'ultimo elemento, appende il primo all'inizio e l'ultimo alla fine


function cloneFirstAndLast (carousel: HTMLElement): void {
    // Note creare tipo slide to clone & slide append before - slide append after map
    // Note - Qui bisogna astrarre la funzionalità di clonazione
    // Note - Tipo io gli do un numero e lui mi genera automaticamente le mappe da appendere e prependere con i cloni, gli attributi, ecc
    // Note - Prima astrazione: Cloner || Seconda astrazione: Map 
    const firstSlide = carousel.querySelector('.carousel__slide[data-index="1"]');
    // Todo : Closure per SLIDE_AMOUNT
    const lastSlide = carousel.querySelector('.carousel__slide[data-index="6"]');
    const firstClone = firstSlide?.cloneNode(true) as Element;
    const lastClone = lastSlide?.cloneNode(true) as Element;
    firstClone.setAttribute('clone', '');
    lastClone.setAttribute('clone', '');
    console.log(firstClone, lastClone);
    carousel.prepend(lastClone);
    carousel.appendChild(firstClone);
}

const cloneElements = (carousel: HTMLUListElement): void => {
    cloneFirstAndLast(carousel);
}



const byDuplicateElements = (carouselWrapper: Element): void => {

    const carousel = carouselWrapper.querySelector('.carousel');
        if (! carousel)
            throw Error('No Carousel')
    const navigation = carouselWrapper.querySelector('.carousel__scroll-marker-group--artificial');
        if (! navigation)
            throw Error('No Nav')
    cloneElements(carousel);
    dinamicallyMoveElements_For_InfiniteScroll(carousel);
}

// #region Utilities Duplicate

// #endregion


export {
    byDuplicateElements, //...
}
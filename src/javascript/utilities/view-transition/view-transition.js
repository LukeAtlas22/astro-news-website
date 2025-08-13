export function SPA_ViewTransition(configObj){
    const button = document.querySelector('.hamburger-button');
    console.log(button);
    const viewTransition = document.startViewTransition();
    console.log(viewTransition);
}

/**
 * Funziona simile a GSAP Flip - Prima starti la view transition, poi fai qualcosa per modificare lo stato del DOM - Tipo cambiare manualmente (in js) lo stile (css), oppure assegnare classi a elementi, ecc...
 * Importante: La callback che opera il processo di aggiornamento visivo del DOM, dev'essere inserita come callback della funzione startViewTransition() - Esempio:
 * @example startViewTransition(CallbackToUpdateDom)
 */
export function startViewTransition(config){
  document.startViewTransition(config.VisualUpdates);
}
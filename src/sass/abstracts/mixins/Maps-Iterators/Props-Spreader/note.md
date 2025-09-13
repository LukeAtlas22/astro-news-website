- Voglio sollevare le utilities: is-prop-in-exlude-list, is-prop-in-disallow-list, ecc? o riscriverne delel nuove?

Per semplicità preferirei rendere ogni tool indipendente. Così le modifiche che faccio a un tool specifico non si propagano alle altre.

Qui abbiamo sempre un problema di dipendenze - Declaration-Applyer dipende da Props-Spreader e comunque copre interamente la sua funzionalità
Rendere propSpreader un utility di basso livello? Quindi non esportarla?

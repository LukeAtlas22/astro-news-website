@mixin Consume-PropsDirectives-ForEach-Breakpoint-Map($Map, $props-directives-map) {
  @each $breakpoint, $breakpoint-inner-map in $Map {
    @if ($breakpoint == 'default'){
@include Consume-PropsDirective-Over-Map($props-directives-map, $map: $breakpoint-inner-map);
    }
    @else if ($breakpoint != 'default') {
@include Media-Query(#{$breakpoint}) {
        @include Consume-PropsDirective-Over-Map($props-directives-map, $map: $breakpoint-inner-map);
}
}
}
}

@mixin apply-declarations-for-each-breakpoint($from, $allowed-pseudo-classes: $ALLOWED_DEFAULT, $exclude: null, $unallow: null, $aliasies: null) {
  @each $breakpoint, $breakpoint-inner-map in $from {
    @if ($breakpoint == 'default') {
@include apply-declarations($breakpoint-inner-map, $allowed-pseudo-classes, $exclude, $unallow, $aliasies );
    }
    @else if ($breakpoint != 'default') {
@include Media-Query(#{$breakpoint}) {
        @include apply-declarations($breakpoint-inner-map, $allowed-pseudo-classes, $exclude, $unallow, $aliasies );
}
}
}
}

// Note - Questi sono due mixins diversi che però hanno qualcosa in comune a livello di "for-each breakpoint" la logica è che applicano una logica, per ogni breakpoint-inner-map di una mappa, potrei dunque, creare un'astrazione, chiamata "for-each-breakpoint-inner-map-in-breakpoint-map"
// Note - Quest'astrazione prende come parametro un mixin, e funzionerebbe in questo modo

@mixin for-each-breakpoint-inner-map-in-breakpoint-map($breakpoint-map, $mixin-to-execute, $mixin-params){
  // Note - Dunque qui potrei buildare il mixin e passargli mixin-params che non è altro che una lista dei vari params del mixins
  // Note - Questo mi permetterebbe di avere una validation centralizzata, e di fare operazioni centralizzate sulla breakpoint-map
  @each $breakpoint, $breakpoint-inner-map in $breakpoint-map {
    @if ($breakpoint == 'default') {
// include mixin-to-execute(mixin-params)
}
@if ($breakpoint != 'default' and is-valid-media-query($breakpoint)) {
@include Media-Query(#{$breakpoint}) {
// include mixin-to-execute(mixin-params)
}
}
}
}

// Note - Dopodichè, riscrivere i miei mixins apply-declarations e consume-props-directives - FOREACH BREAKPOINT affinchè utilizzino questo mixin

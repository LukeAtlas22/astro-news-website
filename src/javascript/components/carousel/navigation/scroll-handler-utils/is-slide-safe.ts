export function isSlideSafe(slide: Element | null): boolean {
  if (!slide) return false;
  return !!(slide.previousElementSibling && slide.nextElementSibling);
}
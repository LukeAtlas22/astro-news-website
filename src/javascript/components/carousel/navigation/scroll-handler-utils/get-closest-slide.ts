export function getClosestSlide(
  currentSlide: Element,
  possibleSlides: Element[],
  allSlides: Element[]
): Element | null {
  const currentIndex = allSlides.indexOf(currentSlide);
  if (currentIndex === -1) return null;

  let closest: Element | null = null;
  let smallestDistance = Infinity;

  for (const candidate of possibleSlides) {
    const candidateIndex = allSlides.indexOf(candidate);
    if (candidateIndex === -1) continue;

    const distance = Math.abs(candidateIndex - currentIndex);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closest = candidate;
    }
  }

  return closest;
}
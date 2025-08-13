export function toPixels(length, context = 16) {
  if (typeof length !== 'string') return null;

  const value = parseFloat(length);
  const unit = length.replace(value, '').trim();

  switch (unit) {
    case 'px':
      return value;
    case 'rem':
      return value * context; // 1rem = 16px per default
    case 'em':
      return value * context; // 1em = context (es. font-size del genitore)
    default:
      throw new Error(`Unità non supportata: ${unit}`);
  }
}
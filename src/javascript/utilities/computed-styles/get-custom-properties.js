export function getCustomProperty(config){
  return getComputedStyle(config.from).getPropertyValue(config.get).trim();
}

export function getCustomPropertyBoolean(config){
  return getComputedStyle(config.from).getPropertyValue(config.get).trim() === 'true';
}
export const setUnit = (value: number | string, unit = 'px') => {
  return typeof value === 'string' ? value : `${value}${unit}`
}

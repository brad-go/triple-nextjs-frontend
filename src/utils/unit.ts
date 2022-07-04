export const setUnit = (value: number | string, unit = 'px') => {
  if (typeof value === 'string') {
    return value
  }

  return `${value}${unit}`
}

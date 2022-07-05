export function easeOutExpo(
  time: number,
  start: number,
  end: number,
  duration: number,
) {
  if (time === duration) {
    return start + end
  }

  return end * (-Math.pow(2, (-10 * time) / duration) + 1) + start
}

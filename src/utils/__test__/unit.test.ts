import { setUnit } from '../unit'

export const strings = ['auto', 'absolute', 'left', 'relative']
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

describe('setUnit', () => {
  it('should return as it is if input is a string', () => {
    strings.forEach((string) => {
      expect(setUnit(string)).toBe(string)
    })
  })

  it('should return as it is if input is a number', () => {
    numbers.forEach((number) => {
      expect(setUnit(number)).toBe(`${number}px`)
    })
  })

  it('should set custom unit', () => {
    numbers.forEach((number) => {
      expect(setUnit(number, 'em')).toBe(`${number}em`)
    })
  })
})

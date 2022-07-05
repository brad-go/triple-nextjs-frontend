import { easeOutExpo } from '../easing'

describe('easeOutExpo', () => {
  it('should be start value if time is 0', () => {
    const value = easeOutExpo(0, 200, 300, 1)
    expect(value).toBe(200)
  })

  it('should be increase dramatically of value', () => {
    const value = easeOutExpo(0.2, 200, 300, 1)
    expect(value).toBe(425)
  })

  it('should be distance if time is equal to duration', () => {
    const value = easeOutExpo(1, 200, 300, 1)
    expect(value).toBe(500)
  })
})

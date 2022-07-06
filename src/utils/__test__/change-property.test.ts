import { changePropertyCamelToKebab } from 'utils/change-property'

describe('changePropertyCamelToKebab', () => {
  it('should not do anything if property is empty string', () => {
    expect(changePropertyCamelToKebab('')).toBe('')
  })

  it('should not do anything if properties are single word', () => {
    const singleWordProperties = ['margin', 'height', 'color', 'position']

    singleWordProperties.forEach((property) => {
      expect(changePropertyCamelToKebab(property)).toBe(property)
    })
  })

  it('should be changed if properties are two words', () => {
    const BACKGROUND_SIZE = 'backgroundSize'
    const PADDING_TOP = 'paddingTop'
    const MARGIN_BOTTOM = 'marginBottom'

    expect(changePropertyCamelToKebab(BACKGROUND_SIZE)).toBe('background-size')
    expect(changePropertyCamelToKebab(PADDING_TOP)).toBe('padding-top')
    expect(changePropertyCamelToKebab(MARGIN_BOTTOM)).toBe('margin-bottom')
  })
})

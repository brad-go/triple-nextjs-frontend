export const changePropertyCamelToKebab = (property: string) => {
  const capital = property.match(/[A-Z]/g)

  if (capital) {
    const capitalIndex = property.indexOf(capital[0])
    const firstWord = property.slice(0, capitalIndex)
    const secondWord = capital[0]
      .toLocaleLowerCase()
      .concat(property.slice(capitalIndex + 1))

    property = `${firstWord}-${secondWord}`
  }

  return property
}

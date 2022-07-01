import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      white: string
      white100: string
      brightGrayLight: string
      brightGrayDark: string
      gray: string
      gray200: string
      gray500: string
      gray700: string
      gray800: string
      mint: string
      blue: string
    }
    boxShadow: {
      phoneFrame: string
      review: string
    }
  }
}

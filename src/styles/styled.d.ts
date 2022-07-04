import 'styled-components'

declare module 'styled-components' {
  interface ColorTheme {
    white: string
    white100: string
    brightGray: string
    deepBrightGray: string
    gray: string
    gray200: string
    gray500: string
    gray700: string
    gray800: string
    mint: string
    blue: string
    gunmetal: string
  }

  interface BoxShadowTheme {
    phoneFrame: string
    review: string
  }

  interface DeviceTheme {
    mobile: string
    pc: string
  }

  export interface DefaultTheme {
    color: ColorTheme
    boxShadow: BoxShadowTheme
    device: DeviceTheme
  }
}

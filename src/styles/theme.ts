import { DefaultTheme } from 'styled-components'

export const color = {
  white: '#fff',
  white100: '#fff1A',
  brightGray: '#fafafa',
  deepBrightGray: '#f5f5f5',
  gray: '#3a3a3a',
  gray200: '#3a3a3a33',
  gray500: '#3a3a3a80',
  gray700: '#3a3a3ab3',
  gray800: '#3a3a3acc',
  mint: '#26cec2',
  blue: '#3666ff',
  gunmetal: '#233332fa',
}

export const boxShadow = {
  phoneFrame:
    'rgb(0 0 0 18%) 0px 9px 17px 0px, rgb(0 0 0 / 8%) 0px -4px 6px 0px inset',
  review: 'rgb(0 0 0 / 5%) 0px 10px 20px 0px',
}

export const deviceSizes = {
  mobile: 1141,
  pc: 1142,
}

export const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  pc: `screen and (min-width: ${deviceSizes.pc}px)`,
}

export const theme: DefaultTheme = {
  color,
  boxShadow,
  device,
}

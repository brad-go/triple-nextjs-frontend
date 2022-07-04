import styled, { css } from 'styled-components'

import { setUnit } from 'utils/unit'

export type ResponsiveSectionType = 'default' | 'primary' | 'heading' | 'footer'

const resizeElementByMediaSize = (
  pcHeight: number | string = 'auto',
  mbHeight: number | string = 'auto',
) => {
  return css`
    @media ${({ theme }) => theme.device.pc} {
      width: 1040px;
      height: ${setUnit(pcHeight)};
    }
    @media ${({ theme }) => theme.device.mobile} {
      width: 360px;
      height: ${setUnit(mbHeight)};
    }
  `
}

const RESPONSIVE_SECTION_TYPES: Partial<
  Record<ResponsiveSectionType, ReturnType<typeof css>>
> = {
  default: resizeElementByMediaSize(),
  primary: resizeElementByMediaSize(1000, 700),
  heading: resizeElementByMediaSize(860, 700),
  footer: resizeElementByMediaSize(1000, 560),
}

const ResponsiveSection = styled.div<{ type?: ResponsiveSectionType }>`
  position: relative;
  margin: 0px auto;

  ${({ type }) => RESPONSIVE_SECTION_TYPES[type || 'default']}
`

export default ResponsiveSection

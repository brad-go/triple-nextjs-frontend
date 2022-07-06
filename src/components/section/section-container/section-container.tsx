import styled, { css } from 'styled-components'

import type { SectionBackgroundStyle } from 'types/section'

const SECTION_BACKGROUND_STYLES: Partial<
  Record<SectionBackgroundStyle, ReturnType<typeof css>>
> = {
  default: css`
    background-image: inherit;
    background-repeat: inherit;
    background-attachment: inherit;
    background-origin: inherit;
    background-clip: inherit;
    background-color: inherit;
  `,
  primary: css`
    background-color: ${({ theme }) => theme.color.brightGray};
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.color.deepBrightGray};
  `,
  toolbox: css`
    background-color: ${({ theme }) => theme.color.mint};
    background-image: url('https://triple.guide/intro/images/bg-section-06.svg');
  `,
  recruit: css`
    background-color: ${({ theme }) => theme.color.blue};
    background-image: url('https://triple.guide/intro/images/group-section-8.svg');
  `,
  footer: css`
    background-color: ${({ theme }) => theme.color.gunmetal};
  `,
}

const SectionContainer = styled.section<{
  backgroundStyle?: SectionBackgroundStyle
}>`
  position: relative;
  background-position: center center;
  background-size: cover;
  overflow: hidden;

  ${({ backgroundStyle }) =>
    SECTION_BACKGROUND_STYLES[backgroundStyle || 'default']}
`

export default SectionContainer

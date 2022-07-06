import Image from 'next/image'
import { forwardRef } from 'react'
import styled, { CSSProperties } from 'styled-components'

import { LOGO_IMAGE } from 'constants/image'
import type { DivRefType } from 'types/section'

interface ContentLogoProps {
  logo?: string
  style?: CSSProperties
  children?: string
}

const LogoContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.gray700};

  @media ${({ theme }) => theme.device.pc} {
    position: absolute;
    padding-top: 150px;
    width: 400px;
    height: 338px;
    font-size: 15px;
    font-family: sans-serif;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 80px auto 20px;
    width: 200px;
    height: 169px;
    font-size: 10px;
  }

  div {
    position: relative;
    width: inherit;
    height: inherit;
  }
`

const LogoText = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media ${({ theme }) => theme.device.pc} {
    top: 280px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    top: 137px;
  }
`

function Logo(
  { logo = LOGO_IMAGE, style, children }: ContentLogoProps,
  ref: DivRefType,
) {
  return (
    <LogoContainer ref={ref} style={style}>
      <div>
        <Image src={logo} alt="logo" layout="fill" />
        <LogoText>{children}</LogoText>
      </div>
    </LogoContainer>
  )
}

const ContentLogo = forwardRef<HTMLDivElement, ContentLogoProps>(Logo)

export default ContentLogo

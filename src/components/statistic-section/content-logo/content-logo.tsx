import Image from 'next/image'
import styled from 'styled-components'

interface ContentLogoProps {
  children?: string
}

const LogoContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.color.gray700};

  @media ${({ theme }) => theme.device.pc} {
    position: absolute;
    top: 150px;
    width: 400px;
    height: 338px;
    font-size: 15px;
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

function ContentLogo({ children }: ContentLogoProps) {
  return (
    <LogoContainer>
      <div>
        <Image src="/images/triple2x.png" alt="logo" layout="fill" />
        <LogoText>{children}</LogoText>
      </div>
    </LogoContainer>
  )
}

export default ContentLogo

import { forwardRef } from 'react'
import styled, { CSSProperties } from 'styled-components'

import { AwardList, AWARD_LIST } from 'constants/awards'
import { UlRefType } from 'types/section'

interface AwardProps {
  awards?: AwardList[]
  style?: CSSProperties
}

const AwardItem = styled.li<{ src: string }>`
  display: inline-block;
  background-image: ${({ src }) => `url(${src})`};
  background-position: left top;
  background-repeat: no-repeat;
  font-family: sans-serif;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray800};

  @media ${({ theme }) => theme.device.pc} {
    height: 54px;
    margin-right: 39px;
    padding: 5px 0px 5px 62px;
    background-size: 54px 54px;
    font-size: 14px;
    line-height: 22px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 4px 0px 4px 45px;
    background-size: 39px 39px;
    font-size: 10px;
    line-height: 15px;

    &:first-child {
      margin-right: 28.5px;
    }
  }
`

const AwardContainer = styled.ul`
  white-space: nowrap;

  @media ${({ theme }) => theme.device.pc} {
    margin: 50px 0px 140px 623px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    width: 300px;
    margin: 50px auto 80px;
  }
`

function Awards({ awards = AWARD_LIST, style }: AwardProps, ref: UlRefType) {
  return (
    <AwardContainer ref={ref} style={style}>
      {awards.map(({ id, platform, award, image }) => (
        <AwardItem key={id} src={image}>
          {platform}
          <br />
          {award}
        </AwardItem>
      ))}
    </AwardContainer>
  )
}

const Award = forwardRef<HTMLUListElement, AwardProps>(Awards)

export default Award

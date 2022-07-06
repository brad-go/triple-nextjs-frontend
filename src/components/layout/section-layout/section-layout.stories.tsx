import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import SectionLayout from './section-layout'

export default {
  title: 'layout/section',
  component: SectionLayout,
} as ComponentMeta<typeof SectionLayout>

const Template: ComponentStory<typeof SectionLayout> = ({ ...args }) => {
  return <SectionLayout {...args} />
}

export const Example = styled.h2`
  width: 100%;
  margin: 0px;
  font-family: sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.color.gray};
  letter-spacing: -1px;
  text-align: center;

  @media ${({ theme }) => theme.device.pc} {
    position: absolute;
    top: 150px;
    font-size: 52px;
    line-height: 68px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 0px;
    padding-top: 110px;
    font-size: 28px;
    line-height: 34px;
  }
`

export const Default = Template.bind({})
Default.args = {
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Heading = Template.bind({})
Heading.args = {
  backgroundStyle: 'default',
  sectionType: 'heading',
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Reservation = Template.bind({})
Reservation.args = {
  backgroundStyle: 'primary',
  sectionType: 'primary',
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Region = Template.bind({})
Region.args = {
  backgroundStyle: 'secondary',
  sectionType: 'primary',
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Toolbox = Template.bind({})
Toolbox.args = {
  backgroundStyle: 'toolbox',
  sectionType: 'primary',
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Recruit = Template.bind({})
Recruit.args = {
  backgroundStyle: 'recruit',
  sectionType: 'primary',
  children: <Example>레이아웃 예시입니다.</Example>,
}

export const Footer = Template.bind({})
Footer.args = {
  backgroundStyle: 'footer',
  sectionType: 'footer',
  children: <Example>레이아웃 예시입니다.</Example>,
}

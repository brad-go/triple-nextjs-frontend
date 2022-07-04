import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import SectionContainer from './section-container'

export default {
  title: 'section/section-container',
  component: SectionContainer,
} as ComponentMeta<typeof SectionContainer>

const Template: ComponentStory<typeof SectionContainer> = ({ ...args }) => {
  return <SectionContainer {...args} />
}

const ResponsiveSection = styled.div`
  position: relative;
  width: 1040px;
  height: 1000px;
  margin: 0px auto;
`

export const Default = Template.bind({})
Default.args = {
  backgroundStyle: 'default',
  children: <ResponsiveSection />,
}

export const Primary = Template.bind({})
Primary.args = {
  backgroundStyle: 'primary',
  children: <ResponsiveSection />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  backgroundStyle: 'secondary',
  children: <ResponsiveSection />,
}

export const Toolbox = Template.bind({})
Toolbox.args = {
  backgroundStyle: 'toolbox',
  children: <ResponsiveSection />,
}

export const Recruit = Template.bind({})
Recruit.args = {
  backgroundStyle: 'recruit',
  children: <ResponsiveSection />,
}

export const Footer = Template.bind({})
Footer.args = {
  backgroundStyle: 'footer',
  children: <ResponsiveSection />,
}

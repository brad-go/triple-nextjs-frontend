import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import SectionContainer from './section-container'

import type { SectionBackgroundStyle } from 'types/section'

export default {
  title: 'section/section-container',
  component: SectionContainer,
  decorators: [
    (Story) => (
      <div style={{ border: '1px solid black' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SectionContainer>

const Template: ComponentStory<typeof SectionContainer> = ({ ...args }) => {
  return <SectionContainer {...args} />
}

const Example = styled.div<{ type?: SectionBackgroundStyle }>`
  position: relative;
  margin: 0 auto;
  border: 1px solid black;

  @media ${({ theme }) => theme.device.pc} {
    width: 1040px;
    height: ${({ type }) => (type === 'default' ? '552px' : '1000px')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 360px;
    height: ${({ type }) => (type === 'default' ? '526px' : '700px')};
  }
`

export const Default = Template.bind({})
Default.args = {
  backgroundStyle: 'default',
  children: <Example type="default" />,
}

export const Primary = Template.bind({})
Primary.args = {
  backgroundStyle: 'primary',
  children: <Example type="primary" />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  backgroundStyle: 'secondary',
  children: <Example type="secondary" />,
}

export const Toolbox = Template.bind({})
Toolbox.args = {
  backgroundStyle: 'toolbox',
  children: <Example type="toolbox" />,
}

export const Recruit = Template.bind({})
Recruit.args = {
  backgroundStyle: 'recruit',
  children: <Example type="recruit" />,
}

export const Footer = Template.bind({})
Footer.args = {
  backgroundStyle: 'footer',
  children: <Example type="footer" />,
}

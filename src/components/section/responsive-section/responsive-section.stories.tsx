import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import ResponsiveSection, { ResponsiveSectionType } from './responsive-section'

export default {
  title: 'section/responsive-section',
  component: ResponsiveSection,
  decorators: [
    (Story) => (
      <div style={{ border: '1px solid black' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ResponsiveSection>

const Template: ComponentStory<typeof ResponsiveSection> = ({ ...args }) => {
  return <ResponsiveSection {...args} />
}

const Example = styled.div<{ type?: ResponsiveSectionType }>`
  background-color: gainsboro;

  @media ${({ theme }) => theme.device.pc} {
    height: ${({ type }) => (type === 'default' ? '552px' : '100%')};
  }
  @media ${({ theme }) => theme.device.mobile} {
    height: ${({ type }) => (type === 'default' ? '526px' : '100%')};
  }
`

export const Default = Template.bind({})
Default.args = {
  children: <Example type="default" />,
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: <Example type="primary" />,
}

export const Heading = Template.bind({})
Heading.args = {
  type: 'heading',
  children: <Example type="heading" />,
}

export const Footer = Template.bind({})
Footer.args = {
  type: 'footer',
  children: <Example type="footer" />,
}

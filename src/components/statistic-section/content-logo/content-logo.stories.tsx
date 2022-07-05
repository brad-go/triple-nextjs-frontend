import { ComponentMeta, ComponentStory } from '@storybook/react'

import ContentLogo from './content-logo'

export default {
  title: 'statistic-section/content-logo',
  component: ContentLogo,
} as ComponentMeta<typeof ContentLogo>

const Template: ComponentStory<typeof ContentLogo> = ({ ...args }) => {
  return <ContentLogo {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: '2021년 12월 기준',
}

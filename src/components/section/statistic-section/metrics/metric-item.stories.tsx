import { ComponentMeta, ComponentStory } from '@storybook/react'

import MetricItem from './metric-item'

export default {
  title: 'statistic-section/metric-item',
  component: MetricItem,
} as ComponentMeta<typeof MetricItem>

const Template: ComponentStory<typeof MetricItem> = ({ ...args }) => {
  return <MetricItem {...args} />
}

export const Default = Template.bind({})
Default.args = {
  metric: 700,
  unit: '만 명의',
  subject: '여행자',
}

export const Mobile = Template.bind({})
Mobile.args = {
  metric: 700,
  unit: '만 명의',
  subject: '여행자',
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}

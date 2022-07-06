import { ComponentMeta, ComponentStory } from '@storybook/react'

import Metric from './metric'

export default {
  title: 'statistic-section/metric',
  component: Metric,
} as ComponentMeta<typeof Metric>

const Template: ComponentStory<typeof Metric> = () => {
  return <Metric />
}

export const Default = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}

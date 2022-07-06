import { ComponentMeta, ComponentStory } from '@storybook/react'

import Award from './award'

export default {
  title: 'statistic-section/award',
  component: Award,
} as ComponentMeta<typeof Award>

const Template: ComponentStory<typeof Award> = () => {
  return <Award />
}

export const Default = Template.bind({})

export const Mobile = Template.bind({})
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
}

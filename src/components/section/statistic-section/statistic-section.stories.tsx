import { ComponentMeta, ComponentStory } from '@storybook/react'

import StatisticSection from './statistic-section'

export default {
  title: 'section/statistic-section',
  component: StatisticSection,
} as ComponentMeta<typeof StatisticSection>

const Template: ComponentStory<typeof StatisticSection> = () => {
  return <StatisticSection />
}

export const Default = Template.bind({})

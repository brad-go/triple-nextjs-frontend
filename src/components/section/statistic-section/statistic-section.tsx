import Award from './awards'
import ContentLogo from './content-logo/'
import Metric from './metrics/metric'

import { SectionLayout } from 'components/layout'
import { useFadeIn } from 'hooks/index'

function StatisticSection() {
  const ref = {
    logoRef: useFadeIn<HTMLDivElement>(700, 0),
    metricRef: useFadeIn<HTMLUListElement>(700, 100),
    awardRef: useFadeIn<HTMLUListElement>(700, 200),
  }

  return (
    <SectionLayout>
      <ContentLogo {...ref.logoRef}>2021년 12월 기준</ContentLogo>
      <Metric {...ref.metricRef} />
      <Award {...ref.awardRef} />
    </SectionLayout>
  )
}

export default StatisticSection

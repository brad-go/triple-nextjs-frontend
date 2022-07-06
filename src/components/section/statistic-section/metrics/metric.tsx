import { forwardRef } from 'react'
import styled, { CSSProperties } from 'styled-components'

import MetricItem from './metric-item'

import { METRIC_LIST, MetricList } from 'constants/metrics'
import type { UlRefType } from 'types/section'

interface MetricProps {
  metrics?: MetricList[]
  style?: CSSProperties
}

const MetricsContaienr = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.gray};
  font-family: sans-serif;

  @media ${({ theme }) => theme.device.pc} {
    margin-left: 623px;
    padding-top: 150px;
    row-gap: 20px;
  }

  @media ${({ theme }) => theme.device.mobile} {
    text-align: center;
    row-gap: 10px;
  }
`

function Metrics(
  { metrics = METRIC_LIST, style }: MetricProps,
  ref: UlRefType,
) {
  return (
    <MetricsContaienr ref={ref} style={style}>
      {metrics.map(({ metric, unit, subject }, idx) => (
        <MetricItem key={idx} metric={metric} unit={unit} subject={subject} />
      ))}
    </MetricsContaienr>
  )
}

const Metric = forwardRef<HTMLUListElement, MetricProps>(Metrics)

export default Metric

import styled from 'styled-components'

import MetricItem from './metric-item'

import { MetricItemList } from 'constants/metrics'

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

function Metric() {
  return (
    <MetricsContaienr>
      {MetricItemList.map(({ metric, unit, subject }, idx) => (
        <MetricItem key={idx} metric={metric} unit={unit} subject={subject} />
      ))}
    </MetricsContaienr>
  )
}

export default Metric

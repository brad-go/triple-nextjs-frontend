import styled from 'styled-components'

import { useCount } from 'hooks/useCount'

interface MetricItemProps {
  metric: number
  unit: string
  subject: string
}

const MetricListItem = styled.li`
  display: inline-block;

  strong {
    font-weight: bold;
  }

  @media ${({ theme }) => theme.device.pc} {
    font-size: 36px;
    letter-spacing: -1px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 20px;
    letter-spacing: 0.5px;
    text-align: center;
  }
`

function MetricItem({ metric, unit, subject }: MetricItemProps) {
  const count = useCount(metric)

  return (
    <MetricListItem>
      <strong>
        <span>{count}</span>
        {unit}
      </strong>
      {subject}
    </MetricListItem>
  )
}

export default MetricItem

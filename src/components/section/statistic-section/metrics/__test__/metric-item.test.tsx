import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import MetricItem from '../metric-item'

import { render } from 'utils/test'

describe('MetricItem', () => {
  it('should be rendered', () => {
    const { container } = render(
      <MetricItem metric={700} unit="만 명의" subject="여행자" />,
    )

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be 0 when initial rendering of count value', () => {
    render(<MetricItem metric={700} unit="만 명의" subject="여행자" />)

    expect(screen.getAllByText('0')[0]).toBeInTheDocument()
  })

  it('should be updated the value of count after a time', () => {
    jest.useFakeTimers()

    render(<MetricItem metric={700} unit="만 명의" subject="여행자" />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(screen.getAllByText('700')[0]).toBeInTheDocument()
  })
})

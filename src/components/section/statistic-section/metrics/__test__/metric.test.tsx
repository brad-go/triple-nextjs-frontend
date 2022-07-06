import { act } from 'react-dom/test-utils'

import Metric from '../metric'

import { render } from 'utils/test'

describe('Metric', () => {
  it('should be rendered', () => {
    const { container } = render(<Metric />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be 0 when initial rendering of count values', () => {
    const { getAllByText } = render(<Metric />)

    expect(getAllByText('0')[0]).toBeInTheDocument()
    expect(getAllByText('0')[1]).toBeInTheDocument()
    expect(getAllByText('0')[2]).toBeInTheDocument()
  })

  it('should be updated the values of count after a time', () => {
    jest.useFakeTimers()

    const { getAllByText } = render(<Metric />)

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(getAllByText('700')[0]).toBeInTheDocument()
    expect(getAllByText('100')[0]).toBeInTheDocument()
    expect(getAllByText('460')[0]).toBeInTheDocument()
  })

  it('should be rendered with custom metrics', () => {
    const METRIC_LIST = [
      {
        id: 1,
        metric: 300,
        unit: '만 장의',
        subject: '여행 사진',
      },
      {
        id: 2,
        metric: 100,
        unit: '곳 이상의',
        subject: '여행지',
      },
    ]

    const { getByText } = render(<Metric metrics={METRIC_LIST} />)
    expect(getByText(METRIC_LIST[0].subject)).toBeInTheDocument()
    expect(getByText(METRIC_LIST[1].subject)).toBeInTheDocument()
  })
})

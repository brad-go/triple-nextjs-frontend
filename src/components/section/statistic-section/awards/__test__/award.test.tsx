import Award from '../award'

import { render } from 'utils/test'
import { AWARD_LIST } from 'constants/awards'

describe('Award', () => {
  it('should be rendered', () => {
    const { container } = render(<Award />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered with parameter', () => {
    const { getAllByRole } = render(<Award awards={AWARD_LIST} />)

    getAllByRole('listitem')
  })

  it('should have background image', () => {
    const { getAllByRole } = render(<Award awards={AWARD_LIST} />)

    const list = getAllByRole('listitem')

    list.forEach((item, idx) => {
      expect(item).toHaveStyle(
        `background-image: url(${AWARD_LIST[idx].image})`,
      )
    })
  })

  it('should have appropriate text', () => {
    const { getByText } = render(<Award awards={AWARD_LIST} />)

    expect(getByText(/2018 구글 플레이스토어/)).toBeInTheDocument()
    expect(getByText(/올해의 앱 최우수상 수상/)).toBeInTheDocument()
    expect(getByText(/2018 애플 앱스토어/)).toBeInTheDocument()
    expect(getByText(/오늘의 여행앱 선정/)).toBeInTheDocument()
  })
})

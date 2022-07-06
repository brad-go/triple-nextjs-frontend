import Award from '../award'

import { render } from 'utils/test'
import { AWARD_LIST } from 'constants/awards'

describe('Award', () => {
  it('should be rendered', () => {
    const { container } = render(<Award />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered', () => {
    const { getAllByRole } = render(<Award awards={AWARD_LIST} />)

    getAllByRole('listitem')
  })
})

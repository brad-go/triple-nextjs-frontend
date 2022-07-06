import ContentLogo from '../content-logo'

import { render } from 'utils/test'
import { AWARD_IMAGE_GOOGLE } from 'constants/image'

const encoded =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

describe('ContentLogo', () => {
  it('should be rendered', () => {
    const { container } = render(<ContentLogo />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered with image', () => {
    const { getByRole } = render(<ContentLogo />)

    const logo = getByRole('img')

    expect(logo).toHaveAttribute('src', encoded)
    expect(logo).toHaveAttribute('alt', 'logo')
  })

  it('should be able to have content', () => {
    const { container, getByText } = render(
      <ContentLogo>2021년 12월 기준</ContentLogo>,
    )

    getByText('2021년 12월 기준')
    expect(container).toMatchSnapshot()
  })

  it('should be able to have another logo image', () => {
    const { getByRole } = render(<ContentLogo logo={AWARD_IMAGE_GOOGLE} />)

    const logo = getByRole('img')

    expect(logo).toHaveAttribute('src', encoded)
    expect(logo).toHaveAttribute('alt', 'logo')
  })
})

import { screen } from '@testing-library/react'

import SectionContainer from '../section-container'

import { render } from 'utils/test'

describe('SectionContainer', () => {
  it('should render Section Container', () => {
    const { container } = render(<SectionContainer />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should render children', () => {
    const children = <div>Example</div>
    const { container } = render(
      <SectionContainer>{children}</SectionContainer>,
    )

    expect(screen.getByText('Example')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should have default background style', () => {
    const DEFAULT_BACKGROUND_STYLES = [
      'background-image',
      'background-repeat',
      'background-attachment',
      'background-origin',
      'background-clip',
      'background-color',
    ]

    render(<SectionContainer data-testid="container" />)

    const container = screen.getByTestId('container')
    expect(container).toHaveStyle('position: relative')
    expect(container).toHaveStyle('background-position: center center')
    expect(container).toHaveStyle('background-size: cover')
    expect(container).toHaveStyle('overflow: hidden')

    DEFAULT_BACKGROUND_STYLES.forEach((property) => {
      expect(screen.getByTestId('container')).toHaveStyle(
        `${property}: inherit`,
      )
    })
  })

  it('should have primary background style', () => {
    render(
      <SectionContainer data-testid="container" backgroundStyle="primary" />,
    )

    const container = screen.getByTestId('container')
    expect(container).toHaveStyle('background-color: rgb(250, 250, 250)')
  })

  it('should have secondary background style', () => {
    render(
      <SectionContainer data-testid="container" backgroundStyle="secondary" />,
    )

    const container = screen.getByTestId('container')
    expect(container).toHaveStyle('background-color: rgb(245, 245, 245)')
  })

  it('should have toolbox background style', () => {
    render(
      <SectionContainer data-testid="container" backgroundStyle="toolbox" />,
    )

    const container = screen.getByTestId('container')
    const URL = 'https://triple.guide/intro/images/bg-section-06.svg'

    expect(container).toHaveStyle('background-color: rgb(38, 206, 194)')
    expect(container).toHaveStyle(`background-image: url(${URL})`)
  })

  it('should have recruit background style', () => {
    render(
      <SectionContainer data-testid="container" backgroundStyle="recruit" />,
    )

    const container = screen.getByTestId('container')
    const URL = 'https://triple.guide/intro/images/group-section-8.svg'

    expect(container).toHaveStyle('background-color: rgb(54, 102, 255)')
    expect(container).toHaveStyle(`background-image: url(${URL})`)
  })

  it('should have footer background style', () => {
    render(
      <SectionContainer data-testid="container" backgroundStyle="footer" />,
    )

    const container = screen.getByTestId('container')
    expect(container).toHaveStyle('background-color: rgba(35, 51, 50, 0.98)')
  })
})

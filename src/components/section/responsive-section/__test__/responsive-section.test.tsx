import { screen } from '@testing-library/react'

import ResponsiveSection from '../responsive-section'

import { render } from 'utils/test'
import { device } from 'styles/theme'

describe('ResponsiveSection', () => {
  it('should be rendered', () => {
    const { container } = render(<ResponsiveSection />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered with children', () => {
    const children = <div>Example</div>
    const { container } = render(
      <ResponsiveSection>{children}</ResponsiveSection>,
    )

    expect(screen.getByText('Example')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered with default style', () => {
    render(<ResponsiveSection data-testid="container" />)

    const container = screen.getByTestId('container')

    expect(container).toHaveStyle('position: relative')
    expect(container).toHaveStyle('margin: 0px auto')
    expect(container).toHaveStyleRule('width', '1040px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('height', 'auto', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('width', '360px', {
      media: device.mobile,
    })
    expect(container).toHaveStyleRule('height', 'auto', {
      media: device.mobile,
    })
  })

  it('should be rendered with primary style', () => {
    render(<ResponsiveSection data-testid="container" type="primary" />)

    const container = screen.getByTestId('container')

    expect(container).toHaveStyle('position: relative')
    expect(container).toHaveStyle('margin: 0px auto')
    expect(container).toHaveStyleRule('width', '1040px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('height', '1000px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('width', '360px', {
      media: device.mobile,
    })
    expect(container).toHaveStyleRule('height', '700px', {
      media: device.mobile,
    })
  })

  it('should be rendered with heading style', () => {
    render(<ResponsiveSection data-testid="container" type="heading" />)

    const container = screen.getByTestId('container')

    expect(container).toHaveStyle('position: relative')
    expect(container).toHaveStyle('margin: 0px auto')
    expect(container).toHaveStyleRule('width', '1040px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('height', '860px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('width', '360px', {
      media: device.mobile,
    })
    expect(container).toHaveStyleRule('height', '700px', {
      media: device.mobile,
    })
  })

  it('should be rendered with footer style', () => {
    render(<ResponsiveSection data-testid="container" type="footer" />)

    const container = screen.getByTestId('container')

    expect(container).toHaveStyle('position: relative')
    expect(container).toHaveStyle('margin: 0px auto')
    expect(container).toHaveStyleRule('width', '1040px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('height', '1000px', {
      media: device.pc,
    })
    expect(container).toHaveStyleRule('width', '360px', {
      media: device.mobile,
    })
    expect(container).toHaveStyleRule('height', '560px', {
      media: device.mobile,
    })
  })
})

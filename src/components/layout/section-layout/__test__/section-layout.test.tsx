import { screen } from '@testing-library/dom'

import SectionLayout from '../section-layout'

import { render } from 'utils/test'

describe('SectionLayout', () => {
  it('should be rendered', () => {
    const { container } = render(<SectionLayout />)

    expect(container).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })

  it('should be rendered with children', () => {
    const { getByText } = render(
      <SectionLayout>
        <h2>Example</h2>
      </SectionLayout>,
    )

    expect(getByText('Example')).toBeInTheDocument()
  })

  it('should be rendered with different style', () => {
    render(
      <SectionLayout backgroundStyle="primary" sectionType="primary">
        <h2>Primary</h2>
      </SectionLayout>,
    )

    expect(screen.getByText('Primary')).toBeInTheDocument()

    render(
      <SectionLayout backgroundStyle="secondary" sectionType="primary">
        <h2>Secondary</h2>
      </SectionLayout>,
    )

    expect(screen.getByText('Secondary')).toBeInTheDocument()

    render(
      <SectionLayout backgroundStyle="toolbox" sectionType="primary">
        <h2>Toolbox</h2>
      </SectionLayout>,
    )

    expect(screen.getByText('Toolbox')).toBeInTheDocument()

    render(
      <SectionLayout backgroundStyle="recruit" sectionType="primary">
        <h2>Recruit</h2>
      </SectionLayout>,
    )

    expect(screen.getByText('Recruit')).toBeInTheDocument()

    render(
      <SectionLayout backgroundStyle="footer" sectionType="footer">
        <h2>Footer</h2>
      </SectionLayout>,
    )

    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})

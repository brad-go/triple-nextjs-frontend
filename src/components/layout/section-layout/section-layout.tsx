import { PropsWithChildren } from 'react'

import { SectionContainer, ResponsiveSection } from 'components/section'
import type {
  SectionBackgroundStyle,
  ResponsiveSectionType,
} from 'types/section'

interface SectionLayoutProps {
  backgroundStyle?: SectionBackgroundStyle
  sectionType?: ResponsiveSectionType
}

function SectionLayout({
  backgroundStyle,
  sectionType,
  children,
}: PropsWithChildren<SectionLayoutProps>) {
  return (
    <SectionContainer backgroundStyle={backgroundStyle}>
      <ResponsiveSection type={sectionType}>{children}</ResponsiveSection>
    </SectionContainer>
  )
}

export default SectionLayout

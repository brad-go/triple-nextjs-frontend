import { RefObject } from 'react'

export type SectionBackgroundStyle =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'toolbox'
  | 'recruit'
  | 'footer'

export type ResponsiveSectionType = 'default' | 'primary' | 'heading' | 'footer'

export type DivRefType =
  | ((instance: HTMLDivElement | null) => void)
  | RefObject<HTMLDivElement>
  | null
  | undefined

export type UlRefType =
  | ((instance: HTMLUListElement | null) => void)
  | RefObject<HTMLUListElement>
  | null
  | undefined

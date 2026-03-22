export interface TableOfContentsItem {
  id: string
  label: string
}

export interface LegalSection {
  id: string
  title: string
  content?: string
  subsections?: LegalSection[]
}

export interface LegalDocument {
  slug: string
  title: string
  description: string
  icon: string
  lastUpdated: string
}

import type { LegalSection, TableOfContentsItem } from '~/types/legal'

export const useLegalContent = () => {
  const generateTableOfContents = (sections: LegalSection[]): TableOfContentsItem[] => {
    return sections.map((section) => ({
      id: section.id,
      label: section.title
    }))
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return {
    generateTableOfContents,
    scrollToSection
  }
}

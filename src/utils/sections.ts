export const SECTIONS = [
  { id: 'topic1', label: 'Topic One' },
  { id: 'topic2', label: 'Topic Two' },
  { id: 'topic3', label: 'Topic Three' },
  { id: 'topic4', label: 'Topic Four' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export const SECTION_IDS = SECTIONS.map((s) => s.id) as [SectionId, ...SectionId[]];
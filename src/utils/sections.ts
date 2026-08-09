export const SECTIONS = [
  { id: 'responses', label: 'Responses' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'history', label: 'History' },
  { id: 'criticism', label: 'Criticism' },
] as const;

export type SectionId = (typeof SECTIONS)[number]['id'];

export const SECTION_IDS = SECTIONS.map((s) => s.id) as [SectionId, ...SectionId[]];

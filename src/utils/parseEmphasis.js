/**
 * Renders emphasis from JSON strings using **segments** (dynamic content, not JSX literals).
 * @param {string} text
 * @returns {{ type: 'text' | 'bold'; text: string }[]}
 */
export function parseBoldSegments(text) {
  if (!text) return [];
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part) => {
    const m = part.match(/^\*\*(.+)\*\*$/);
    if (m) return { type: 'bold', text: m[1] };
    return { type: 'text', text: part };
  });
}

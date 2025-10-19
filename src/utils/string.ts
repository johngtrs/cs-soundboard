/**
 * Normalizes a string by removing accents and special characters
 * for better search matching
 */
export function normalizeString(str: string): string {
  return str
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .toLowerCase()
    .replace(/ç/g, 'c'); // Handle specific characters
}

/**
 * Checks if a string matches a search query, ignoring accents and case
 */
export function matchesSearch(text: string, query: string): boolean {
  return normalizeString(text).includes(normalizeString(query));
}

/**
 * Get Majuscule on first letter string
 * @param string 
 * @returns {string}
 */
export function firstLetterUpper(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
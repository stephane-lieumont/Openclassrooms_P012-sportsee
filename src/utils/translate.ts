import translateEnFr from '../translate/en_fr.json'

/**
 * Translate data kind name with local language
 * @param lang 
 * @param entry 
 * @returns {string}
 */
export function translate(lang:string, entry:string): string | undefined {
  const translateObjectEnFR: Map<string, string> = new Map(Object.entries(translateEnFr));

  switch(lang) {
    case 'fr':
      return translateObjectEnFR.get(entry)
    default:
      return entry
  }
}

import translateEnFr from '../translate/en_fr.json'

export function translate(lang:string, entry:string) {
  const translateObjectEnFR: Map<string, string> = new Map(Object.entries(translateEnFr));

  switch(lang) {
    case 'fr':
      return translateObjectEnFR.get(entry)
    default:
      return entry
  }
}
const BLACKLIST = ['and', 'of', 'the']

export interface SanitizeOptions {
  trim?: boolean
  blacklist?: string[]
}

export function sanitize(
  text: string,
  { trim = true, blacklist = BLACKLIST }: SanitizeOptions = {}
) {
  const kebabCase = text.toLocaleLowerCase().replace(/\W/g, '-')
  const filtered = blacklist
    .map((word) => new RegExp(`\\b${word}\\b`, 'g'))
    .reduce((sanitizedKey, wordRegExp) => sanitizedKey.replace(wordRegExp, '-'), kebabCase)
  if (trim) {
    return filtered.replace(/-+/g, '-').replace(/^-|-$/g, '')
  }
  return filtered
}

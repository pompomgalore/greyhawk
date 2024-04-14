const BLACKLIST = ['and', 'of', 'the']

export function sanitize(text: string, blacklist = BLACKLIST) {
  const kebabCase = text.toLocaleLowerCase().replace(/\W/g, '-')
  const filtered = blacklist
    .map((word) => new RegExp(`\\b${word}\\b`, 'g'))
    .reduce((sanitizedKey, wordRegExp) => sanitizedKey.replace(wordRegExp, '-'), kebabCase)
  return filtered.replace(/-+/g, '-').replace(/^-|-$/g, '')
}

<script setup lang="ts">
import { useSlots } from 'vue'

const BLACKLIST = ['and', 'of', 'the'].map((word) => new RegExp(`\\b${word}\\b`, 'g'))

const mapTargets: [href: string, keys: string[]][] = [
  ['bissel', ['march-bissel']],
  ['celene', ['kingdom-celene']],
  ['dyvers', ['free-independent-city-dyvers']],
  ['frost-barbarians', ['kingdom-fruztii']],
  ['great-kingdom', ['kingdom-aerdy']],
  ['greyhawk', ['free-city-greyhawk']],
  ['ice-barbarians', ['kingdom-cruski']],
  ['idee', ['county-idee']],
  ['irongate', ['free-city-irongate']],
  ['iuz', ['land-iuz']],
  ['onnwal', ['free-state-onnwal']],
  ['perrenland', ['concatenated-cantons-perrenland']],
  ['plains-paynims', ['tribes-paynims']],
  ['ratik', ['archbarony-ratik']],
  ['rel-astra', ['city-rel-astra']],
  ['snow-barbarians', ['kingdom-schnai']],
  ['sterich', ['earldom-sterich']],
  ['tiger-nomads', ['chakyik']],
  ['veluna', ['archclericy-veluna']],
  ['verbobonc', ['viscounty-town-verbobonc']],
  ['wolf-nomads', ['wegwiur']]
]

const slots = useSlots()

type DefaultNode = ReturnType<Exclude<typeof slots.default, undefined>>[number]
function getNodeText(node: DefaultNode) {
  if (typeof node.children === 'string') {
    return node.children
  }
  return ''
}

function sanitize(text: string) {
  const kebabCase = text.toLocaleLowerCase().replace(/\W/g, '-')
  const filtered = BLACKLIST.reduce(
    (sanitizedKey, wordRegExp) => sanitizedKey.replace(wordRegExp, '-'),
    kebabCase
  )
  return filtered.replace(/-+/g, '-').replace(/^-|-$/g, '')
}

function getSanitizedText() {
  if (!slots.default) {
    return undefined
  }
  const text = slots.default().map(getNodeText).join('-')
  return sanitize(text)
}

function getHref() {
  const key = getSanitizedText()
  if (key) {
    for (const [href, keys] of mapTargets) {
      if (href === key || keys.includes(key)) {
        return `#${href}`
      }
    }
  }
  return `#${key}`
}
</script>

<template>
  <a :href="getHref()">
    <slot />
  </a>
</template>

<style scoped>
a {
  color: var(--color-black);
  font-family: var(--font-sans);
}
</style>

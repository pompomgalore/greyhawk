<script setup lang="ts">
import { useSlots } from 'vue'

const BLACKLIST = ['and', 'of', 'the'].map((word) => new RegExp(`\\b${word}\\b`, 'g'))

const slots = useSlots()

type DefaultNode = ReturnType<Exclude<typeof slots.default, undefined>>[number]
function getNodeText(node: DefaultNode) {
  if (typeof node.children === 'string') {
    return node.children
  }
  return ''
}

function getKey() {
  if (!slots.default) {
    return undefined
  }
  const key = slots.default().map(getNodeText).join('-').toLocaleLowerCase().replace(/\W/g, '-')
  return BLACKLIST.reduce((sanitizedKey, wordRegExp) => sanitizedKey.replace(wordRegExp, '-'), key)
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function getHref() {
  const key = getKey()
  switch (key) {
    case 'amedio-coasts':
      return '#amedio-jungle'
    case 'march-bissel':
      return '#bissel'
    case 'kingdom-celene':
      return '#celene'
    case 'free-independent-city-dyvers':
      return '#dyvers'
    case 'fairwind':
      return '#fairwind-isle'
    case 'flotsom':
      return '#flotsom-island'
    case 'frost-barbarians':
    case 'kingdom-fruztii':
      return '#frost-barbarians'
    case 'aerdy':
    case 'great-kingdom-aerdy':
    case 'kingdom-aerdy':
      return '#great-kingdom'
    case 'free-city-greyhawk':
      return '#greyhawk'
    case 'independent-town-highfolk':
      return '#highfolk'
    case 'sea-princes':
      return '#hold-sea-princes'
    case 'hool':
      return 'hool-marshes'
    case 'ice-barbarians-cruski':
      return '#ice-barbarians'
    case 'county-idee':
      return '#idee'
    case 'free-city-irongate':
      return '#irongate'
    case 'land-iuz':
      return '#iuz'
    case 'jetsom':
      return 'jetsom-island'
    case 'keoland':
      return '#kingdom-keoland'
    case 'nyrond':
      return '#kingdom-nyrond'
    case 'principality-isles':
      return '#lordship-isles'
    case 'free-state-onnwal':
      return '#onnwal'
    case 'concatenated-cantons-perrenland':
      return '#perrenland'
    case 'tribes-paynims':
      return '#plains-paynims'
    case 'toli':
      return '#port-toli'
    case 'barony-ratik':
      return '#ratik'
    case 'city-rel-astra':
      return '#rel-astra'
    case 'snow-barbarians-schnai':
      return '#snow-barbarians'
    case 'earldom-sterich':
      return '#sterich'
    case 'tiger-nomads-chakyik':
      return '#tiger-nomads'
    case 'archclericy-veluna':
      return '#veluna'
    case 'viscounty-town-verbobonc':
      return '#verbobonc'
    case 'wolf-nomads-wegwlur':
      return '#wolf-nomads'
    default:
      return `#${key}`
  }
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

<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue'
import { sanitize } from '@/utils/sanitize'
import { getNodeText } from '@/utils/nodeText'

const MAP_TARGETS: [href: string, keys: string[]][] = [
  ['bissel', ['march-bissel']],
  ['celene', ['kingdom-celene']],
  ['dyvers', ['free-independent-city-dyvers']],
  ['frost-barbarians', ['kingdom-fruztii']],
  ['great-kingdom', ['kingdom-aerdy']],
  ['greyhawk', ['free-city-greyhawk']],
  ['highfolk', ['valley-velverdyva']],
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

function getTargetHref(contentText: string) {
  const sanitizedContent = sanitize(contentText)
  for (const [targetHref, targetKeys] of MAP_TARGETS) {
    if (targetHref === sanitizedContent || targetKeys.includes(sanitizedContent)) {
      return `#${targetHref}`
    }
  }
  return `#${sanitizedContent}`
}

const slots = useSlots()
const href = ref<string>()

onMounted(() => {
  const contentNodes = slots.default && slots.default()
  const contentText = contentNodes && getNodeText(contentNodes)
  if (contentText) {
    href.value = getTargetHref(contentText)
  }
})
</script>

<template>
  <a :href="href">
    <slot />
  </a>
</template>

<style scoped>
a {
  color: var(--color-black);
  font-family: var(--font-sans);
}
</style>

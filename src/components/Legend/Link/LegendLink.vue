<script setup lang="ts">
import { onMounted, ref, useSlots } from 'vue'
import { sanitize } from '@/utils/sanitize'
import { getNodeText } from '@/utils/nodeText'
import { MAP_TARGETS } from '@/utils/mapTarget'

const slots = useSlots()
const anchorRef = ref<HTMLAnchorElement>()
const href = ref<string>()

function getContentText() {
  const contentNodes = slots.default && slots.default()
  return contentNodes && getNodeText(contentNodes)
}

function getTargetHref(contentText: string) {
  const sanitizedContent = sanitize(contentText)
  for (const [targetHref, targetKeys] of MAP_TARGETS) {
    if (targetHref === sanitizedContent || targetKeys.includes(sanitizedContent)) {
      return `#${targetHref}`
    }
  }
  return `#${sanitizedContent}`
}

function highlightBrokenAnchor(href: string) {
  const target = document.querySelector(href)
  if (!target && anchorRef.value) {
    anchorRef.value.style.color = 'red'
  }
}

onMounted(() => {
  const contentText = getContentText()
  if (contentText) {
    href.value = getTargetHref(contentText)
    highlightBrokenAnchor(href.value)
  }
})
</script>

<template>
  <a ref="anchorRef" :href="href">
    <slot />
  </a>
</template>

<style scoped>
a {
  color: var(--color-black);
  font-family: var(--font-sans);
}
</style>

<script setup lang="ts">
import HeraldryIcon from '@/components/Heraldry/HeraldryIcon.vue'
import { sanitize } from '@/utils/sanitize'
import { getNodeText } from '@/utils/nodeText'
import { ref, useSlots, type Slot } from 'vue'
import { watchSanitizedSearchString } from '@/store/search'

defineProps<{
  heraldry?: string[]
}>()

const isVisible = ref<boolean>(true)
const isFeatured = ref<boolean>(false)

const slots = useSlots()

function getSlotSanitizedText(slotName: keyof typeof slots) {
  if (slots[slotName]) {
    // Using "as" to avoid a troubling ts2722 error on build
    const slot = slots[slotName] as Slot
    const slotNodes = slot()
    const slotText = slotNodes && getNodeText(slotNodes)
    return slotText && sanitize(slotText)
  }
  return ''
}

const sanitizedHeader = getSlotSanitizedText('header')
const sanitizedContent = getSlotSanitizedText('default')

watchSanitizedSearchString((sanitizedSearchString) => {
  const headerContainsFilter = !!sanitizedHeader && sanitizedHeader.includes(sanitizedSearchString)
  const contentContainsFilter =
    !!sanitizedContent && sanitizedContent.includes(sanitizedSearchString)
  isVisible.value = headerContainsFilter || contentContainsFilter
  isFeatured.value = headerContainsFilter
})
</script>

<template>
  <section v-if="isVisible" :class="{ featured: isFeatured }">
    <header>
      <heraldry-icon v-for="heraldryName of heraldry" :key="heraldryName" :name="heraldryName" />
      <slot name="header" />
    </header>
    <slot />
  </section>
</template>

<style scoped>
.featured {
  order: -1;
}

header {
  margin: 1.5em 0 1em;

  img {
    float: left;
    margin: -0.125em 0.5em 0.25em 0;
    height: 2rem;
  }

  img + img {
    margin-left: -1.5em;
  }
}

:slotted(h2),
:slotted(h3) {
  margin-bottom: 0;
}
:slotted(h3) {
  padding-top: 0.25em;
}

:slotted(strong) {
  display: block;
  overflow: auto;
}
</style>

<script setup lang="ts">
import HeraldryIcon from '@/components/Heraldry/HeraldryIcon.vue'
import { sanitize } from '@/utils/sanitize'
import { getNodeText } from '@/utils/nodeText'
import { onMounted, onUpdated, ref, useSlots } from 'vue'

const props = defineProps<{
  heraldry?: string[]
  sanitizedFilterString?: string
}>()

const slots = useSlots()
const contentNodes = slots.default && slots.default()
const contentText = contentNodes && getNodeText(contentNodes)

const titleNodes = slots.title && slots.title()
const titleText = titleNodes && getNodeText(titleNodes)

const sanitizedTitle = titleText && sanitize(titleText)
const sanitizedContent = contentText && sanitize(contentText)

const titleContainsFilter = ref<boolean>(true)
const contentContainsFilter = ref<boolean>(true)

const containsFilter = () => {
  titleContainsFilter.value =
    !props.sanitizedFilterString ||
    (sanitizedTitle !== undefined && sanitizedTitle.includes(props.sanitizedFilterString))
  contentContainsFilter.value =
    !props.sanitizedFilterString ||
    (sanitizedContent !== undefined && sanitizedContent.includes(props.sanitizedFilterString))
}

onMounted(containsFilter)
onUpdated(containsFilter)
</script>

<template>
  <section v-if="titleContainsFilter || contentContainsFilter">
    <header>
      <heraldry-icon
        v-for="heraldryName of props.heraldry"
        :key="heraldryName"
        :name="heraldryName"
      />
      <slot name="header" />
    </header>
    <slot />
  </section>
</template>

<style scoped>
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

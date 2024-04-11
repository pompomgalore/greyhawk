<script setup lang="ts">
import { icons } from '@/utils/heraldry'

const { name } = defineProps<{
  name: string
}>()
</script>

<template>
  <img :src="icons[name]" />
</template>

<style scoped>
img {
  filter: drop-shadow(0 0 1px var(--color-black));
}
</style>

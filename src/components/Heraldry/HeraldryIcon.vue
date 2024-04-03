<script setup lang="ts">
import { icons } from '@/libs/heraldry'

const { name } = defineProps<{
  name: keyof typeof icons
}>()
</script>

<template>
  <img class="heraldry-icon" style="" :src="icons[name]" />
</template>

<style scoped>
.heraldry-icon {
  display: inline-block;
  line-height: 1;
  vertical-align: text-bottom;
  margin-right: 0.25em;
  height: 31px;
  filter: drop-shadow(0 0 1px var(--color-black));
}
.heraldry-icon + .heraldry-icon {
  margin-left: -0.75em;
}
</style>

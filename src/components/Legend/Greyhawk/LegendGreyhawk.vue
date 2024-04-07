<script setup lang="ts">
import LegendGreyhawkPoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
import LegendGreyhawkHeader from './LegendGreyhawkHeader.vue'
import LegendGreyhawkFooter from './LegendGreyhawkFooter.vue'
import { ref } from 'vue'

const divRef = ref<HTMLDivElement>()
defineExpose({ divRef })
</script>

<template>
  <div ref="divRef">
    <legend-greyhawk-header />
    <h1>World of Greyhawk</h1>
    <legend-greyhawk-political-divisions />
    <legend-greyhawk-footer />
  </div>
</template>

<script setup lang="ts">
import LegendGreyhawkPoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
import LegendGreyhawkHeader from './LegendGreyhawkHeader.vue'
import LegendFooter from '../Footer/LegendFooter.vue'
import { ref } from 'vue'

const divRef = ref<HTMLDivElement>()
defineExpose({ divRef })
</script>

<template>
  <div ref="divRef">
    <legend-greyhawk-header />
    <h1>World of Greyhawk</h1>
    <legend-greyhawk-political-divisions />
    <legend-footer />
  </div>
</template>

<script setup lang="ts">
import LegendGreyhawkPoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
import LegendGreyhawkHeader from './LegendGreyhawkHeader.vue'
import LegendFooter from '../Footer/LegendFooter.vue'
import { ref } from 'vue'

const mainRef = ref<HTMLDivElement>()
defineExpose({ mainRef })

const searchString = ref<string>()
</script>

<template>
  <main ref="mainRef">
    <input v-model="searchString" />
    <legend-greyhawk-header />
    <h1>World of Greyhawk</h1>
    <legend-greyhawk-political-divisions />
    <legend-footer />
  </main>
</template>

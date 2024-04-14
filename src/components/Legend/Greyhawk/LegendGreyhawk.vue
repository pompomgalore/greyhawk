<script setup lang="ts">
import LegendGreyhawkPoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
import LegendGreyhawkHeader from './LegendGreyhawkHeader.vue'
import LegendFooter from '../Footer/LegendFooter.vue'
import { ref } from 'vue'

const mainRef = ref<HTMLDivElement>()

const searchString = ref<string>()

defineExpose({ mainRef })
</script>

<template>
  <main ref="mainRef">
    <legend-greyhawk-header />
    <h1>World of Greyhawk</h1>
    <input v-model="searchString" name="search" placeholder="Search..." autofocus />
    <legend-greyhawk-political-divisions :filterString="searchString" />
    <legend-footer />
  </main>
</template>

<style scoped>
input {
  font-size: 20px;
}
</style>

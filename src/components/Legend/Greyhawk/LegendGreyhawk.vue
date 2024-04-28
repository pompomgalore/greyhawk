<script setup lang="ts">
import LegendGreyhawkPoliticalDivisions from './LegendGreyhawkPoliticalDivisions.vue'
import LegendGreyhawkHeader from './LegendGreyhawkHeader.vue'
import LegendFooter from '../Footer/LegendFooter.vue'
import { ref } from 'vue'
import { searchString } from '@/store/search'

const mainRef = ref<HTMLDivElement>()
defineExpose({ mainRef })
</script>

<template>
  <main ref="mainRef">
    <legend-greyhawk-header />
    <h1>World of Greyhawk</h1>
    <input
      v-model="searchString"
      name="search"
      placeholder="Search..."
      autocomplete="off"
      autofocus
    />
    <div class="legend">
      <legend-greyhawk-political-divisions />
    </div>
    <legend-footer />
  </main>
</template>

<style scoped>
input {
  font-size: 20px;
}

.legend {
  display: flex;
  flex-direction: column;
}
.legend:empty::after {
  content: 'No results found.';
  text-align: center;
  padding: 1em;
}
</style>

<script setup lang="ts">
import PoliticalDivisions from './ContentGreyhawkPoliticalDivisions.vue'
</script>

<template>
  <div class="content-greyhawk">
    <political-divisions />
  </div>
</template>

<style scoped>
.content-greyhawk {
  position: absolute;
  top: 1em;
  right: auto;
  bottom: 1em;
  left: 1em;
  padding: 1.618em 1em;
  max-width: calc(100vh / 1.618 - 2em);
  background: rgba(255, 255, 255, 0.9);
  overflow: auto;
  border-radius: var(--border-radius);
}
</style>

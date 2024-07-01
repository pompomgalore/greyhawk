<script lang="ts" setup>
import LegendGreyhawk from '@/components/Legend/Greyhawk/LegendGreyhawk.vue'
// import MapGreyhawk from '@/components/Map/Greyhawk/MapGreyhawk.vue'
import MapGreyhawkImage from '@/components/Map/Greyhawk/MapGreyhawkImage.vue'
import { ref } from 'vue'

// const mapRef = ref<InstanceType<typeof MapGreyhawk>>()
const mapRef = ref<InstanceType<typeof MapGreyhawkImage>>()
const legendRef = ref<InstanceType<typeof LegendGreyhawk>>()

function focusOnElement(hash: string) {
  if (mapRef.value && mapRef.value.focusOnElement) {
    mapRef.value.focusOnElement(hash)
  }
}

function isTargetAnchor(target: EventTarget | null): target is HTMLAnchorElement {
  return target instanceof HTMLAnchorElement && target.hash.startsWith('#')
}

function onClickLegend(event: MouseEvent) {
  if (isTargetAnchor(event.target)) {
    event.preventDefault()
    focusOnElement(event.target.hash)
  }
}
</script>

<template>
  <div class="map-view">
    <map-greyhawk-image ref="mapRef" class="map-view-map" />
    <!-- <map-greyhawk ref="mapRef" class="map-view-map" /> -->
    <legend-greyhawk ref="legendRef" class="map-view-legend" @click="onClickLegend" />
  </div>
</template>

<style scoped>
.map-view {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: row-reverse;
}
.map-view-map {
  flex-basis: 61.8%;
}
.map-view-legend {
  flex-basis: 38.2%;
  overflow: auto;
  padding: 1em 1.618em;
}
@media (orientation: portrait) {
  .map-view {
    flex-direction: column;
  }
  .map-view-map {
    flex-basis: 38.2%;
  }
  .map-view-legend {
    flex-basis: 61.8%;
  }
}
</style>

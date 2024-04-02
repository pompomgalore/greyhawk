<script lang="ts" setup>
import LegendGreyhawk from '@/components/Legend/Greyhawk/LegendGreyhawk.vue'
import MapGreyhawk from '@/components/Map/Greyhawk/MapGreyhawk.vue'
import { onMounted, ref } from 'vue'

const mapRef = ref<InstanceType<typeof MapGreyhawk>>()
const legendRef = ref<InstanceType<typeof LegendGreyhawk>>()

function focusOnElement(hash: string) {
  if (mapRef.value && mapRef.value.focusOnElement) {
    mapRef.value.focusOnElement(hash)
  }
}

function queryMapSelector(hash: string) {
  if (mapRef.value && mapRef.value.queryMapSelector) {
    return mapRef.value.queryMapSelector(hash)
  }
}

function isAnchorElement(target: EventTarget | null): target is HTMLAnchorElement {
  return target instanceof HTMLAnchorElement
}

function onClickLegend(event: MouseEvent) {
  if (isAnchorElement(event.target)) {
    focusOnElement(event.target.hash)
  }
}

function highlightBrokenAnchor(target: EventTarget | null) {
  if (isAnchorElement(target)) {
    target.style.color = 'red'
  }
}

onMounted(() => {
  if (legendRef.value) {
    const anchors = legendRef.value.$el.querySelectorAll('a')
    for (const anchor of anchors) {
      const targetElement = queryMapSelector(anchor.hash)
      if (!targetElement) {
        highlightBrokenAnchor(anchor)
      }
    }
  }
})
</script>

<template>
  <div class="map-view">
    <map-greyhawk ref="mapRef" class="map-view-map" />
    <legend-greyhawk ref="legendRef" class="map-view-legend" @click.prevent="onClickLegend" />
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
  padding: 2em 1.5em 3em;
}
</style>

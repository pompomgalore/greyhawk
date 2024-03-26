<script lang="ts" setup>
import Panzoom, { type PanzoomObject } from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'

const svgRef = ref<SVGElement>()

const panzoom = ref<PanzoomObject>()

onMounted(() => {
  if (svgRef.value) {
    if (svgRef.value.parentElement) {
      svgRef.value.parentElement.style.overflow = 'hidden'
      svgRef.value.parentElement.style.maxHeight = '100vh'
    }
    panzoom.value = Panzoom(svgRef.value, {
      animate: false,
      duration: 0,
      maxScale: 12,
      minScale: 0.33,
      cursor: 'grab',
      contain: 'outside'
    })
    svgRef.value.addEventListener('wheel', panzoom.value.zoomWithWheel)
  }
})
onUnmounted(() => {
  if (panzoom.value) {
    if (svgRef.value) {
      svgRef.value.removeEventListener('wheel', panzoom.value.zoomWithWheel)
    }
    panzoom.value.destroy()
  }
})
</script>

<template>
  <svg class="map-svg" ref="svgRef" xmlns="http://www.w3.org/2000/svg">
    <slot />
  </svg>
</template>

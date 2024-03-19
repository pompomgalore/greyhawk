<template>
  <div class="map-container" ref="containerRef">
    <map-greyhawk-vector class="map-image" ref="imageRef" />
  </div>
</template>

<script lang="ts" setup>
import Panzoom from '@panzoom/panzoom'
import { ref, onMounted } from 'vue'
import MapGreyhawkVector from './MapGreyhawkVector.vue'
import './MapGreyhawk.css'
const containerRef = ref<HTMLDivElement>()
const imageRef = ref<{ svgRef: SVGSVGElement }>()

onMounted(() => {
  if (containerRef.value && imageRef.value) {
    const panzoom = Panzoom(imageRef.value.svgRef, {
      animate: false,
      duration: 0,
      maxScale: 10,
      cursor: 'grab',
      contain: 'outside'
    })
    containerRef.value.addEventListener('wheel', panzoom.zoomWithWheel)
  }
})
</script>

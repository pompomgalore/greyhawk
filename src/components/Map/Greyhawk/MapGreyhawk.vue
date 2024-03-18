<template>
  <div class="map-container" ref="containerRef">
    <img class="map-image" src="./MapGreyhawk.svg" ref="imageRef" />
  </div>
</template>

<script lang="ts" setup>
import Panzoom from '@panzoom/panzoom'
import { ref, onMounted } from 'vue'
import './MapGreyhawk.css'
const containerRef = ref<HTMLDivElement>()
const imageRef = ref<HTMLImageElement>()
onMounted(() => {
  if (containerRef.value && imageRef.value) {
    const panzoom = Panzoom(imageRef.value, {
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

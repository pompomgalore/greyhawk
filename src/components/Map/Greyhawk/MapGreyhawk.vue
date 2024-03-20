<template>
  <div class="map-container" ref="containerRef">
    <div class="map-content" ref="contentRef">
      <map-greyhawk-vector class="map-image" />
      <map-grid class="map-grid" :size="18.85" :width="4224" :height="3168" :x="4" :y="-9" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Panzoom, {
  // type PanzoomEventDetail,
  type PanzoomObject
} from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'
import MapGreyhawkVector from './Vector/MapGreyhawkVector.vue'
import MapGrid from '../Grid/MapGrid.vue'
import './MapGreyhawk.css'

const containerRef = ref<HTMLDivElement>()
const contentRef = ref<HTMLDivElement>()

const panzoom = ref<PanzoomObject>()

const onPanzoomChange = (() =>
  // event: CustomEvent<PanzoomEventDetail>
  {
    // if (contentRef.value) {
    //   console.log(event.detail)
    // }
  }) as EventListener

onMounted(() => {
  if (containerRef.value && contentRef.value) {
    panzoom.value = Panzoom(contentRef.value, {
      animate: false,
      duration: 0,
      maxScale: 12,
      minScale: 0.1,
      cursor: 'grab',
      contain: 'outside'
    })
    containerRef.value.addEventListener('wheel', panzoom.value.zoomWithWheel)
    contentRef.value.addEventListener('panzoomchange', onPanzoomChange)
  }
})
onUnmounted(() => {
  if (panzoom.value) {
    panzoom.value.destroy()
    if (containerRef.value) {
      containerRef.value.removeEventListener('wheel', panzoom.value.zoomWithWheel)
    }
    if (contentRef.value) {
      contentRef.value.removeEventListener('panzoomchange', onPanzoomChange)
    }
  }
})
</script>

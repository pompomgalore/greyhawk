<template>
  <div class="map-container" ref="containerRef">
    <svg
      class="map-content"
      ref="contentRef"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      id="map-greyhawk"
      version="1.1"
      viewBox="680 1280 43060 32300"
      width="4224"
      height="3168"
    >
      <map-greyhawk-vector :scale="scale" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import Panzoom, { type PanzoomEventDetail, type PanzoomObject } from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'
import MapGreyhawkVector from './Vector/MapGreyhawkVector.vue'
import './MapGreyhawk.css'

const containerRef = ref<HTMLDivElement>()
const contentRef = ref<SVGElement>()

const panzoom = ref<PanzoomObject>()
const scale = ref<number>(1)

const onPanzoomChange = ((event: CustomEvent<PanzoomEventDetail>) => {
  if (contentRef.value) {
    scale.value = event.detail.scale
  }
}) as EventListener

onMounted(() => {
  if (containerRef.value && contentRef.value) {
    panzoom.value = Panzoom(contentRef.value, {
      animate: false,
      duration: 0,
      maxScale: 12,
      minScale: 0.33,
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

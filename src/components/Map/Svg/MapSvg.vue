<script lang="ts" setup>
import Panzoom, { type PanzoomEventDetail, type PanzoomObject } from '@panzoom/panzoom'
import _ from 'lodash'
import { ref, onMounted, onUnmounted } from 'vue'

const svgRef = ref<SVGElement>()

const panzoom = ref<PanzoomObject>()

const scale = ref<number>(1)

const onPanzoomChange = _.debounce((event: CustomEvent<PanzoomEventDetail>) => {
  if (svgRef.value) {
    scale.value = event.detail.scale
  }
}, 200)

onMounted(() => {
  if (svgRef.value) {
    if (svgRef.value.parentElement) {
      svgRef.value.parentElement.style.overflow = 'hidden'
      svgRef.value.parentElement.style.maxHeight = '100vh'
    }
    panzoom.value = Panzoom(svgRef.value, {
      maxScale: 12,
      minScale: 0.25,
      cursor: 'grab',
      contain: 'outside'
    })
  }
})
onUnmounted(() => {
  if (panzoom.value) {
    panzoom.value.destroy()
  }
})
</script>

<template>
  <svg
    class="map-svg"
    ref="svgRef"
    xmlns="http://www.w3.org/2000/svg"
    @panzoomchange="onPanzoomChange"
    @wheel="panzoom?.zoomWithWheel"
  >
    <slot :scale="scale" />
  </svg>
</template>

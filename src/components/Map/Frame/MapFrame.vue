<script lang="ts" setup>
import Panzoom, { type PanzoomEventDetail, type PanzoomObject } from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'

const divRef = ref<HTMLDivElement>()

const panzoom = ref<PanzoomObject>()

const scale = ref<number>(1)

const onPanzoomChange = (event: CustomEvent<PanzoomEventDetail>) => {
  if (divRef.value) {
    scale.value = event.detail.scale
  }
}

onMounted(() => {
  if (divRef.value) {
    if (divRef.value.parentElement) {
      divRef.value.parentElement.style.overflow = 'hidden'
      divRef.value.parentElement.style.maxHeight = '100vh'
    }
    panzoom.value = Panzoom(divRef.value, {
      maxScale: 7.6,
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
  <div ref="divRef" @panzoomchange="onPanzoomChange" @wheel="panzoom?.zoomWithWheel">
    <slot :scale="scale" />
  </div>
</template>

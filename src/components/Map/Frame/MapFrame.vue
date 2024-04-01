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

const props = defineProps<{
  width: number
  height: number
  startScale?: number
  minScale?: number
  maxScale?: number
}>()

onMounted(() => {
  if (divRef.value && divRef.value.parentElement) {
    const clientWidth = divRef.value.parentElement.clientWidth
    const clientHeight = divRef.value.parentElement.clientHeight
    panzoom.value = Panzoom(divRef.value, {
      cursor: 'grab',
      contain: 'outside',
      startScale: props.startScale,
      minScale: props.minScale,
      maxScale: props.maxScale,
      startX: (clientWidth - props.width) / 4,
      startY: (clientHeight - props.height) / 4
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

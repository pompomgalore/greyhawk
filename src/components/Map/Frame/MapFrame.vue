<script lang="ts" setup>
import Panzoom, {
  type PanzoomEventDetail,
  type PanzoomObject,
  type PanzoomOptions
} from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'

const divRef = ref<HTMLDivElement>()

const panzoom = ref<PanzoomObject>()

const scale = ref<number>(1)

const onPanzoomChange = (event: CustomEvent<PanzoomEventDetail>) => {
  if (divRef.value) {
    scale.value = Math.round(event.detail.scale * 100) / 100
  }
}

const {
  width,
  height,
  startScale = 1,
  ...panzoomOptions
} = defineProps<
  {
    width: number
    height: number
  } & Pick<PanzoomOptions, 'startScale' | 'minScale' | 'maxScale'>
>()

onMounted(() => {
  if (divRef.value && divRef.value.parentElement) {
    const clientWidth = divRef.value.parentElement.clientWidth
    const clientHeight = divRef.value.parentElement.clientHeight
    const startX = (clientWidth - width) / (startScale * startScale)
    const startY = (clientHeight - height) / (startScale * startScale)
    panzoom.value = Panzoom(divRef.value, {
      ...panzoomOptions,
      contain: 'outside',
      startX,
      startY
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
  <div
    class="map-frame"
    ref="divRef"
    :style="{ width: `${width}px`, height: `${height}px` }"
    @panzoomchange="onPanzoomChange"
    @wheel="panzoom?.zoomWithWheel"
  >
    <slot :scale="scale" />
  </div>
</template>

<style scoped>
:slotted(*) {
  display: block;
  position: absolute;
}
</style>

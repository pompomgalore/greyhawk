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
  minScale,
  maxScale
} = defineProps<
  {
    width: number
    height: number
  } & Pick<PanzoomOptions, 'startScale' | 'minScale' | 'maxScale'>
>()

function focusTo(x: number, y: number) {
  if (panzoom.value && divRef.value && divRef.value.parentElement) {
    const { clientWidth, clientHeight } = divRef.value.parentElement
    panzoom.value.pan((clientWidth / 2 - x) / scale.value, (clientHeight / 2 - y) / scale.value, {
      animate: true,
      relative: true
    })
  }
}

defineExpose({ focusTo })

onMounted(() => {
  if (divRef.value && divRef.value.parentElement) {
    const { clientWidth, clientHeight } = divRef.value.parentElement
    const startX = (clientWidth - width) / 2 / startScale
    const startY = (clientHeight - height) / 2 / startScale
    panzoom.value = Panzoom(divRef.value, {
      contain: 'outside',
      startScale,
      minScale,
      maxScale,
      startX,
      startY,
      animate: true,
      duration: 800
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

<script lang="ts" setup>
import Panzoom, {
  type PanzoomEventDetail,
  type PanzoomObject,
  type PanzoomOptions
} from '@panzoom/panzoom'
import { ref, onMounted, onUnmounted } from 'vue'

const contentRef = ref<HTMLDivElement>()
const frameRef = ref<HTMLDivElement>()
const panzoom = ref<PanzoomObject>()
const current = ref<Pick<PanzoomEventDetail, 'scale' | 'x' | 'y'>>({ scale: 1, x: 0, y: 0 })

const { width, height, minScale, maxScale } = defineProps<
  {
    width: number
    height: number
  } & Pick<PanzoomOptions, 'minScale' | 'maxScale'>
>()

function onPanzoomChange(event: CustomEvent<PanzoomEventDetail>) {
  current.value = event.detail
}

function onWheel(event: WheelEvent) {
  if (panzoom.value) {
    panzoom.value.zoomWithWheel(event)
  }
}

function queryMapSelector(selector: string) {
  if (contentRef.value && selector) {
    return contentRef.value.querySelector(selector)
  }
}

function getFrameRect() {
  if (frameRef.value) {
    return frameRef.value.getBoundingClientRect()
  }
  return { top: 0, left: 0, width: 0, height: 0 }
}

function getCenterPoint(element: Element): Point {
  const { top, left, width, height } = element.getBoundingClientRect()
  return [left + width / 2, top + height / 2]
}

function focusOnPoint([x, y]: Point) {
  const { width, height } = getFrameRect()
  if (panzoom.value && current.value) {
    const startX = width / 2 - x
    const startY = height / 2 - y
    panzoom.value.reset({ startX, startY, force: false })
  }
}

function focusOnElement(selector: string) {
  const mapElement = queryMapSelector(selector)
  if (mapElement) {
    const point = getCenterPoint(mapElement)
    focusOnPoint(point)
  }
}

defineExpose({ focusOnElement, focusOnPoint, queryMapSelector })

onMounted(() => {
  if (contentRef.value && frameRef.value) {
    const { width: frameWidth, height: frameHeight } = getFrameRect()
    const startX = (frameWidth - width) / 2
    const startY = (frameHeight - height) / 2
    panzoom.value = Panzoom(contentRef.value, {
      contain: 'outside',
      startScale: 1,
      minScale,
      maxScale,
      startX,
      startY,
      animate: true,
      duration: 400
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
  <div ref="frameRef" class="map-frame">
    <div
      ref="contentRef"
      :style="{ width: `${width}px`, height: `${height}px` }"
      @wheel.prevent="onWheel"
      @panzoomchange.prevent="onPanzoomChange"
    >
      <slot :scale="current.scale" />
    </div>
  </div>
</template>

<style scoped>
:slotted(*) {
  display: block;
  position: absolute;
}
.map-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

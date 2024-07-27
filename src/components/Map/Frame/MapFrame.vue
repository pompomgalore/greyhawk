<script lang="ts" setup>
import { clamp } from 'lodash'
import { ref, onMounted } from 'vue'

interface MapFrameTransform {
  x: number
  y: number
  scale: number
}

const { width, height } = defineProps<{
  width: number
  height: number
}>()

const contentRef = ref<HTMLDivElement>()
const frameRef = ref<HTMLDivElement>()
const transform = ref<MapFrameTransform>({ scale: 1, x: 0, y: 0 })
const pointerPosition = ref<{ x: number; y: number }>({ x: 0, y: 0 })

function queryMapSelector(selector: string) {
  if (contentRef.value && selector) {
    return contentRef.value.querySelector(selector)
  }
}
function getCenterPoint(element: Element): Point {
  const { top, left, width, height } = element.getBoundingClientRect()
  return [left + width / 2, top + height / 2]
}

function focusOnElement(selector: string) {
  const mapElement = queryMapSelector(selector)
  if (mapElement) {
    const point = getCenterPoint(mapElement)
    focusOnPoint(point)
  }
}
function focusOnPoint([x, y]: Point) {
  if (frameRef.value) {
    const { width: frameWidth, height: frameHeight } = frameRef.value.getBoundingClientRect()
    transform.value = { x: frameWidth / 2 - x, y: frameHeight / 2 - y, scale: 1 }
  }
}

function handlePointerMove(event: PointerEvent) {
  if (event.buttons > 0) {
    const { x: previousX, y: previousY } = pointerPosition.value
    translateBy(event.clientX - previousX, event.clientY - previousY)
    handlePointerPosition(event)
  }
}
function handlePointerPosition(event: PointerEvent) {
  pointerPosition.value = { x: event.clientX, y: event.clientY }
}

function translateBy(x: number, y: number) {
  const { x: currentX, y: currentY, scale } = transform.value
  transform.value = clampTransform({
    x: currentX + x / scale,
    y: currentY + y / scale,
    scale
  })
}
function clampTransform({ x, y, scale }: MapFrameTransform): MapFrameTransform {
  if (frameRef.value) {
    const { width: frameWidth, height: frameHeight } = frameRef.value.getBoundingClientRect()
    return {
      x: clamp(x, frameWidth - width, 0),
      y: clamp(y, frameHeight - height, 0),
      scale
    }
  }
  return { x, y, scale }
}

defineExpose({ focusOnElement, focusOnPoint, queryMapSelector })

onMounted(() => {
  focusOnPoint([width / 2, height / 2])
})
</script>

<template>
  <div
    ref="frameRef"
    class="map-frame"
    @pointerdown.prevent="handlePointerPosition"
    @pointerenter.prevent="handlePointerPosition"
    @pointermove.prevent="handlePointerMove"
  >
    <div
      ref="contentRef"
      class="map-content"
      :style="{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`
      }"
    >
      <slot :scale="transform.scale" />
    </div>
  </div>
</template>

<style scoped>
:slotted(*) {
  display: block;
  position: absolute;
}
/* .map-content {
  transition: transform 0.2s ease-in-out;
} */
.map-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>

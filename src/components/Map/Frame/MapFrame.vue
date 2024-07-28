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

function animateTransform({ x, y, scale }: MapFrameTransform, timeout = 400) {
  if (contentRef.value) {
    contentRef.value.style.transition = `transform ${timeout / 1000}s ease-in-out`
    applyTransform({ x, y, scale })
    setTimeout(() => {
      if (contentRef.value) {
        contentRef.value.style.transition = ''
      }
    }, timeout)
  }
}
function applyTransform({ x, y, scale }: MapFrameTransform) {
  if (frameRef.value) {
    const { width: frameWidth, height: frameHeight } = frameRef.value.getBoundingClientRect()
    transform.value = {
      x: clamp(x, frameWidth - width * scale, 0),
      y: clamp(y, frameHeight - height * scale, 0),
      scale
    }
  }
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
    animateTransform({ x: frameWidth / 2 - x, y: frameHeight / 2 - y, scale: 1 })
  }
}

function handlePointerMove(event: PointerEvent) {
  if (event.buttons > 0) {
    translateBy(event.clientX - pointerPosition.value.x, event.clientY - pointerPosition.value.y)
    handlePointerPosition(event)
  }
}
function handlePointerPosition(event: PointerEvent) {
  pointerPosition.value = { x: event.clientX, y: event.clientY }
}
function handleWheel(event: WheelEvent) {
  if (frameRef.value) {
    const { top, left } = frameRef.value.getBoundingClientRect()
    zoomBy(1 - event.deltaY / 1000, [event.clientX - left, event.clientY - top])
  }
}

function zoomBy(factor: number, [clientX, clientY]: Point) {
  if (frameRef.value) {
    const { x: currentX, y: currentY, scale: currentScale } = transform.value
    const scale = clamp(currentScale * factor, 0.5, 2)
    if (scale !== currentScale) {
      const transformOriginX = (clientX - currentX) / currentScale
      const transformOriginY = (clientY - currentY) / currentScale
      const x = clientX - transformOriginX * scale
      const y = clientY - transformOriginY * scale
      applyTransform({
        x,
        y,
        scale
      })
    }
  }
}
function translateBy(x: number, y: number) {
  const { x: currentX, y: currentY, scale } = transform.value
  applyTransform({
    x: currentX + x,
    y: currentY + y,
    scale
  })
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
    @wheel.prevent="handleWheel"
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
.map-content {
  transform-origin: 0 0;
}
.map-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
